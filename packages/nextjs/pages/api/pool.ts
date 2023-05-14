import { Redis } from "@upstash/redis";
import { ROUTE_TYPES, TX_STATUS } from "~~/components/scaffold-eth";

let transactions: any = {};

const IS_LOCAL_TX_STORAGE = false; // set true if you want to use local tx storage
const TX_COLLECTION_NAME = "transactions_multisig";

const redis = new Redis({
  url: process.env.UPSTASH_URL as string,
  token: process.env.UPSTASH_TOKEN as string,
});

export default async function handler(request: Request | any, response: Response | any) {
  if (request.method === "POST") {
    if (!IS_LOCAL_TX_STORAGE) {
      transactions = await redis.hgetall(TX_COLLECTION_NAME);
      if (!transactions) {
        await redis.hset(TX_COLLECTION_NAME, { empty: "" });
      }
    }
    console.log(`n-🔴 => handler => transactions:`, transactions);

    const { reqType, walletAddress, currentNonce, chainId, tx_type } = request.body;

    if (reqType === ROUTE_TYPES.GET_POOL) {
      const key = walletAddress + "_" + chainId;
      if (!transactions[key]) {
        return response.json({ data: [] });
      }

      if (transactions[key]) {
        if (tx_type === TX_STATUS.IN_QUEUE) {
          const filteredPool = transactions[key].filter(data => +data.nonce >= +currentNonce);
          // console.log(`n-🔴 => handler => filteredPool:`, filteredPool);

          return response.json({ data: filteredPool });
        }

        if (tx_type === TX_STATUS.COMPLETED) {
          const filteredPool = transactions[key].filter(data => +data.nonce < +currentNonce);

          return response.json({ data: filteredPool });
        }
      }
    }

    if (reqType === ROUTE_TYPES.ADD_TX) {
      const key = request.body?.walletAddress + "_" + request.body.chainId;
      if (!transactions[key]) {
        if (request.body.hash) {
          transactions[key] = [{ ...request.body }];
        }

        if (!IS_LOCAL_TX_STORAGE) {
          await redis.hset(TX_COLLECTION_NAME, { ...transactions });
        }
        return response.json({ transactions });
      }

      if (transactions[key]) {
        transactions[key].push({ ...request.body });

        if (!IS_LOCAL_TX_STORAGE) {
          await redis.hset(TX_COLLECTION_NAME, { ...transactions });
        }
        return response.json({ transactions });
      }
    }

    if (reqType === ROUTE_TYPES.UPDATE_TX) {
      const { txId, walletAddress, chainId, newData } = request.body;
      const key = request.body.walletAddress + "_" + request.body.chainId;

      if (!transactions[key]) {
        return response.json({ data: [] });
      }
      if (transactions[key]) {
        transactions[key] = transactions[key].map(txData => {
          if (txData.txId === txId) {
            txData = { ...txData, ...newData };
          }
          return txData;
        });

        if (!IS_LOCAL_TX_STORAGE) {
          await redis.hset(TX_COLLECTION_NAME, { ...transactions });
        }
        return response.json({ data: transactions[key] });
      }
    }
  } else {
    // Handle any other HTTP method
    request.status(200).json({ name: "John Doe" });
  }
}
