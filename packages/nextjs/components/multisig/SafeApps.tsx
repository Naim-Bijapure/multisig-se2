import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ethers, utils } from "ethers";
import moment from "moment";
import toast from "react-hot-toast";
import { useLocalStorage } from "usehooks-ts";
import { useNetwork, useProvider, useSigner } from "wagmi";
import { Address, ROUTE_TYPES, TX_STATUS } from "~~/components/scaffold-eth";
import { useAppCommunicator } from "~~/safeAppService";
import {
  MethodToResponse,
  Methods,
  RPCPayload,
  SignMessageParams,
  SignTypedMessageParams,
} from "~~/safeAppService/types";
import { useAppStore } from "~~/services/store/store";
import { notification } from "~~/utils/scaffold-eth";

// const appUrl = "http://localhost:3001";

const SafeApps = ({ isWC = false }: { isWC: boolean }) => {
  const router = useRouter();

  // zustand hooks
  const walletAddress = useAppStore(state => state.walletAddress);
  const walletContract = useAppStore(state => state.currentWalletContract);
  const txPoolLength = useAppStore(state => state.txPoolLength);

  const [selectedUrl, setSelectedUrl] = useLocalStorage("selectedUrl", "https://app.uniswap.org");
  // local states
  const [newTx, setNewTx] = useState(null);
  const [appUrl, setAppUrl] = useState("https://app.uniswap.org");
  // const [selectedUrl, setSelectedUrl] = useState("https://app.uniswap.org");
  const [urls, setUrls] = useState<any>();

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const communicator = useAppCommunicator(iframeRef);

  const provider = useProvider();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();

  //   useEffects
  useEffect(() => {
    if (!provider) return;

    communicator?.on(Methods.getSafeInfo, async () => {
      return {
        safeAddress: walletAddress,
        chainId: (await provider.getNetwork()).chainId,
        owners: [],
        threshold: 1,
        isReadOnly: false,
      };
    });

    communicator?.on(Methods.getEnvironmentInfo, async () => {
      return {
        origin: document.location.origin,
      };
    });

    communicator?.on(Methods.rpcCall, async msg => {
      const params = msg.data.params as RPCPayload;
      try {
        const response = (await provider.send(params.call, params.params)) as MethodToResponse["rpcCall"];
        return response;
      } catch (err) {
        return err;
      }
    });

    communicator?.on(Methods.sendTransactions, msg => {
      // @ts-expect-error explore ways to fix this
      const transactions = (msg.data.params.txs as Transaction[]).map(({ to, ...rest }) => ({
        to: utils.getAddress(to), // checksummed
        ...rest,
      }));
      setNewTx(transactions[0]);
    });

    communicator?.on(Methods.signMessage, async msg => {
      const { message } = msg.data.params as SignMessageParams;
      // openSignMessageModal(message, msg.data.id, Methods.signMessage)
    });

    communicator?.on(Methods.signTypedMessage, async msg => {
      const { typedData } = msg.data.params as SignTypedMessageParams;
    });
    onLoadUrls();
  }, [communicator, walletAddress, provider]);

  const onLoadUrls = async () => {
    const result = await axios.get("https://safe-client.safe.global/v1/chains/4/safe-apps");
    const appUrls: any[] = result.data;
    if (appUrls) {
      setUrls([...appUrls.map(item => ({ url: item.url, name: item.name }))]);
    }
  };

  const onPropose = async () => {
    const toastId = notification.loading("hold on creating proposal !");
    try {
      if (!newTx) {
        return;
      }
      const { to, from, data, value } = newTx;
      const executeToAddress = to;
      const currentNonce = await walletContract?.nonce();
      // const nonce = Boolean(customNonce) ? customNonce : Number(currentNonce?.toString()) + Number(poolTxNumber);
      const nonce = Number(currentNonce?.toString()) + Number(txPoolLength);
      const callData = data;
      const newHash = await walletContract?.getTransactionHash(
        nonce,
        executeToAddress,
        ethers.utils.parseEther("" + parseFloat(ethers.utils.formatEther(value)).toFixed(12)),
        callData,
      );

      const signature = await signer?.signMessage(ethers.utils.arrayify(newHash));
      const recover = await walletContract?.recover(newHash, signature);
      const isOwner = await walletContract?.isOwner(recover);

      const reqData = {
        txId: Date.now(),
        chainId: chain?.id,
        walletAddress: walletContract?.address,
        nonce: nonce?.toString(),
        to: executeToAddress,
        amount: ethers.utils.formatEther(value),
        data: callData,
        hash: newHash,
        signatures: [signature],
        signers: [recover],
        type: "iframe",
        appUrl: appUrl,
        status: TX_STATUS.IN_QUEUE,
        createdAt: moment().format("YYYY-MM-DD HH:mm"),
        createdBy: from,
        isCancel: false,
      };

      if (isOwner) {
        await axios.post(`/api/pool`, { reqType: ROUTE_TYPES.ADD_TX, ...reqData });
        setNewTx(null);
        router.push("/");
      }

      toast.dismiss(toastId);
    } catch (error: any) {
      toast.dismiss(toastId);
      notification.error(error.message);
      console.log("n-Error: ", error);
    }
  };

  const onChangeAppUrl = (url: string) => {
    setSelectedUrl(url);
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`flex justify-between items-center m-2 ${isWC && "hidden"}`}>
        {/* input url */}
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Load safe app"
              className="input input-bordered input-sm"
              onChange={event => setAppUrl(event.target.value)}
            />
            <button className="btn btn-square btn-sm" onClick={() => onChangeAppUrl(appUrl)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* select url */}
        <span className="font-bold m-2">Or</span>

        <div className="form-control">
          <div className="input-group">
            <select
              className="select select-bordered select-sm w-[50%]"
              onChange={event => {
                setAppUrl(event.target.value);
              }}
            >
              <option disabled selected>
                Select app
              </option>
              {urls &&
                urls.map(({ url, name }: any) => {
                  return (
                    <option key={url} value={url}>
                      {name}
                    </option>
                  );
                })}
            </select>
            <button className="btn btn-sm" onClick={() => onChangeAppUrl(appUrl)}>
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-2 w-full">
        <span className="mr-2 font-bold">Wallet</span>
        <span>
          <Address address={walletAddress} />
        </span>
      </div>
      <iframe
        key={"iframe"}
        title="app"
        src={!isWC ? selectedUrl : "https://apps-portal.safe.global/wallet-connect"}
        className="h-screen w-[97%]  border-4 border-primary rounded-md"
        ref={iframeRef}
        // onLoad={() => {}}
      />

      {/* confirm proposal modal */}

      <input type="checkbox" id="my-modal-6" className="modal-toggle" checked={newTx !== null} />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setNewTx(null)}
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">
            Create proposal from <span className="text-primary">{appUrl}</span>{" "}
          </h3>
          <div>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <tbody>
                  {newTx &&
                    Object.keys(newTx).map(key => {
                      return (
                        <tr key={key}>
                          <td className="font-bold">{key}</td>
                          <td>{newTx[key]}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-primary" onClick={onPropose}>
              Propose
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeApps;
