import { ROUTE_TYPES, TX_STATUS } from "~~/components/scaffold-eth";

const transactions: any = {};

export default function handler(request: Request | any, response: Response | any) {
  if (request.method === "POST") {
    const { reqType, walletAddress, currentNonce, chainId, tx_type } = request.body;

    if (reqType === ROUTE_TYPES.GET_POOL) {
      const key = walletAddress + "_" + chainId;
      if (!transactions[key]) {
        return response.json({ data: [] });
      }

      if (transactions[key]) {
        if (tx_type === TX_STATUS.IN_QUEUE) {
          const filteredPool = transactions[key].filter(data => data.nonce >= currentNonce);

          return response.json({ data: filteredPool });
        }

        if (tx_type === TX_STATUS.COMPLETED) {
          // const filteredPool = transactions[key]
          //   .filter(item => item.nonce < currentNonce && item.status === TX_STATUS.COMPLETED)
          //   .sort((A, B) => B.nonce - A.nonce);

          // return response.json({ data: filteredPool });

          const filteredPool = transactions[key].filter(data => data.nonce < currentNonce);

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

        return response.json({ transactions });
      }

      if (transactions[key]) {
        transactions[key].push({ ...request.body });
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
        return response.json({ data: transactions[key] });
      }
    }
  } else {
    // Handle any other HTTP method
    request.status(200).json({ name: "John Doe" });
  }
}
