import { useEffect, useState } from "react";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import axios from "axios";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";
import QRCode from "react-qr-code";
import { useCopyToClipboard, useDarkMode, useDebounce, useInterval, useLocalStorage } from "usehooks-ts";
import { Chain, useAccount, useNetwork, useSignTypedData, useSigner, useSwitchNetwork } from "wagmi";
import { MinusCircleIcon, PlusCircleIcon, RocketLaunchIcon, ShareIcon } from "@heroicons/react/24/outline";
import { ConfirmNonceModal } from "~~/components/multisig/ConfirmNonceModal";
import { ProposalModal } from "~~/components/multisig/ProposalModal";
import {
  Address,
  AddressInput,
  Balance,
  EtherInput,
  InputBase,
  MAIN_TABS,
  ROUTE_TYPES,
  TX_STATUS,
} from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useEvent, useScaffoldContractWrite, useTransactor } from "~~/hooks/scaffold-eth";
import { useAppStore } from "~~/services/store/store";
import { notification } from "~~/utils/scaffold-eth";

// const Sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const previewAddress = "0xbA61FFB5378D34aCD509205Fd032dFEBEc598975";

const poolData = [
  {
    txId: 22321,
    chainId: 31337,
    walletAddress: "0xbA61FFB5378D34aCD509205Fd032dFEBEc598975",
    nonce: "0",
    to: "0x0fAb64624733a7020D332203568754EB1a37DB89",
    amount: 0.0007152513035455008,
    data: "0x",
    cancel_data: "0x",
    hash: "0x58670d26e3add93a7480ceb162ad4b236f6306e260e91d7976c339b9279fee53",
    cancel_hash: "0x58670d26e3add93a7480ceb162ad4b236f6306e260e91d7976c339b9279fee53",
    signatures: [
      "0x1f19e9e2bd95ec771926c4eba4c91e0d0da01e91f1188858edee9dd10cc61d7c26dc656a3fc7375053f3f7544136b7db4ed5c391624bb263330e12b5c7f1ed151b",
      "0x1f19e9e2bd95ec771926c4eba4c91e0d0da01e91f1188858edee9dd10cc61d7c26dc656a3fc7375053f3f7544136b7db4ed5c391624bb263330e12b5c7f1ed151b",
    ],
    signers: ["0x0fAb64624733a7020D332203568754EB1a37DB89", "0x0fAb64624733a7020D332203568754EB1a37DB89"],
    split_addresses: [],
    cancel_signatures: [],
    cancel_signers: [],
    type: "transfer",
    status: "success",
    url: "https://example.com",
    createdAt: "10-10-2023 10:10",
    executedAt: "10-10-2023 10:10",
    executedBy: "0x0fAb64624733a7020D332203568754EB1a37DB89",
    createdBy: "0x0fAb64624733a7020D332203568754EB1a37DB89",
    isCancel: false,
  },
];
const skipTxKey = ["chainId", "url", "status", "reqType", "isCancel"];

const Home = ({
  chainId,
  walletAddress,
  isSharedWallet = false,
  txId = 0,
}: {
  chainId?: string;
  walletAddress?: string;
  isSharedWallet?: boolean;
  txId?: number;
}) => {
  // states
  const [chainData, setChainData] = useState<Chain[]>();
  const [activeTab, setActiveTab] = useState<number>();
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [isCreateWalletModalOpen, setIsCreateWalletModalOpen] = useState<boolean>(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState<boolean>(false);
  const [walletName, setWalletName] = useState<string>("");
  const [ownersAddress, setOwnersAddress] = useState<string[]>([]);
  const [ownerAddress, setOwnerAddress] = useState<string>("");
  const [signatures, setSignatures] = useState<number>();
  const [walletAmount, setWalletAmount] = useState<string>();
  const [factoryContract, setFactoryContract] = useState<any>();
  const [refreshToggle, setRefreshToggle] = useState<boolean>(false);
  const [ownedWallets, setOwnedWallets] = useState<any[]>([]);
  const [userWallets, setUserWallets] = useState([]);
  const [currentWalletName, setCurrentWalletName] = useState<string>("");
  const [toggleChangeWallet, setToggleChangeWallet] = useState<boolean>(false);
  const [signaturesRequired, setSignaturesRequired] = useState<number>();
  const [nonce, setNonce] = useState<number>(0);
  const [numberOfOwners, setNumberOfOwners] = useState<number>();
  const [walletContract, setWalletContract] = useState<ethers.Contract>();
  const [walletOwners, setWalletOwners] = useState<string[]>([]);
  const [currentWalletAddress, setCurrentWalletAddress] = useState<string>();
  const [computedWalletAddress, setComputedWalletAddress] = useState<string>();
  const [isWalletExists, setIsWalletExists] = useState<boolean>(false);
  const [isNewWalletCreated, setIsNewWalletCreated] = useState<boolean>(false);
  const [txPool, setTxPool] = useState<any[]>([]);
  const [txPoolHistory, setTxPoolHistory] = useState<any[]>([]);
  const [togglePool, setTogglePool] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [editedTxNonce, setEditedTxNonce] = useState<number | any>(undefined);
  const [isConfirmNonceOpen, setIsConfirmNonceOpen] = useState<boolean>(false);
  const [currentTxData, setCurrentTxData] = useState<any>(undefined);
  const [selectedTxs, setSelectedTxs] = useState<number[]>([]);

  const [value, copy] = useCopyToClipboard();

  // global zustand hook
  const setWalletAddress = useAppStore(state => state.setWalletAddress);
  const setCurrentWalletContract = useAppStore(state => state.setCurrentWalletContract);
  const setTxPoolLength = useAppStore(state => state.setTxPoolLength);

  // useHooks
  const debounceWalletName = useDebounce(walletName, 500);
  const { isDarkMode } = useDarkMode();

  // wagmi hooks
  const { chains, switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  // scaffold hooks
  // create 2
  const { data: create2Data, writeAsync } = useScaffoldContractWrite({
    contractName: "MultiSigFactory",
    functionName: "create2",

    args: [ownersAddress, signatures as any, debounceWalletName],
    value: walletAmount && !isNaN(+walletAmount) ? `${Number(walletAmount)}` : "0",
  });

  const Tx = useTransactor(signer ? signer : undefined);

  const { data: deployedFactoryInfo } = useDeployedContractInfo("MultiSigFactory");
  const { data: deployedWalletInfo } = useDeployedContractInfo("MultiSigWallet");

  // events
  const owners = useEvent(factoryContract, "Owners", refreshToggle);

  const wallets = useEvent(factoryContract, "Create2Event", refreshToggle);

  // localstorage states
  // a local storage to persist selected wallet data
  const [walletData, setWalletData] = useLocalStorage("_walletData", {
    [chain ? chain?.id : ""]: {
      selectedWalletAddress: undefined,
      selectedWalletName: undefined,
    },
  });

  useInterval(() => {
    setTogglePool(() => !togglePool);
  }, 15000);

  // methods
  const onChangeTab = (tabType: MAIN_TABS) => {
    setCurrentTab(tabType);
  };
  const loadComputedAddress = async () => {
    const computedAddress = await factoryContract.computedAddress(debounceWalletName);
    const isContractExists = await factoryContract.provider.getCode(computedAddress);

    if (isContractExists !== "0x") {
      setIsWalletExists(true);
      return;
    }

    setIsWalletExists(false);
    setComputedWalletAddress(computedAddress);
  };

  const onCreateWallet = async () => {
    const tx = await writeAsync();
  };

  const onRemoveAddress = async (address: string) => {
    setOwnersAddress([...new Set([...ownersAddress].filter(value => value !== address))]);
  };

  const getOwnedWallets = async (wallets, owners) => {
    const fromWallets = [];
    for (const { args } of wallets) {
      const { owners } = args;
      const isOwner = await owners.includes(address);
      if (isOwner) {
        fromWallets.push(args.contractAddress);
      }
    }

    const fromOwners = [];
    for (const { args } of owners) {
      const { owners } = args;
      const isOwner = await owners.includes(address);
      if (isOwner) {
        fromOwners.push(args.contractAddress);
      }
    }

    const ownedWallets = [...new Set([...fromWallets, ...fromOwners])];

    return ownedWallets;
  };

  const loadWallets = async (address: string) => {
    // loading from frontend event , this is costly on performance
    let userWallets = await getOwnedWallets(wallets, owners);

    userWallets = [...userWallets];
    setOwnedWallets([...userWallets]);

    const filteredWallets = wallets.filter((data: any) => {
      return userWallets.includes(data?.args.contractAddress);
    });
    setUserWallets(filteredWallets);

    // loading a  url shared wallet
    if (isSharedWallet === true && deployedWalletInfo && signer) {
      const walletContract = new ethers.Contract(walletAddress ? walletAddress : "", deployedWalletInfo?.abi, signer);
      const walletName = await walletContract.name();

      onChangeWallet(walletAddress, walletName);
      setCurrentWalletName(walletName);
      setCurrentWalletAddress(walletAddress);
      setWalletAddress(walletAddress || "");
      return;
    }

    if (wallets && wallets.length > 0 && filteredWallets.length > 0 && address && chain) {
      const lastWallet = filteredWallets[filteredWallets.length - 1]?.args;

      // loading first time
      if (walletData && walletData[chain.id]?.selectedWalletAddress === undefined && isSharedWallet === false) {
        onChangeWallet(lastWallet.contractAddress, lastWallet.name);
        setCurrentWalletName(lastWallet.name);
        setCurrentWalletAddress(lastWallet.contractAddress);
        setWalletAddress(lastWallet.contractAddress);
        return;
      }

      // already loaded then selecting last selected wallet
      if (chain && walletData && walletData[chain.id]?.selectedWalletAddress !== undefined) {
        onChangeWallet(walletData[chain.id]?.selectedWalletAddress, walletData[chain.id]?.selectedWalletName);
        setCurrentWalletName(walletData[chain.id]?.selectedWalletName || "");
        setCurrentWalletAddress(walletData[chain.id]?.selectedWalletAddress);
        setWalletAddress(walletData[chain.id]?.selectedWalletAddress || "");

        return;
      }
    }
  };

  const onChangeWallet = (walletAddress: any, walletName: any) => {
    // setSelectedWalletAddress(walletAddress);

    if (chain) {
      setWalletData({
        ...walletData,
        [chain?.id]: {
          selectedWalletAddress: walletAddress,
          selectedWalletName: walletName,
        },
      });
      setCurrentWalletName(walletName);
      setToggleChangeWallet(!toggleChangeWallet);
    }
  };

  const filterWallets = () => {
    if (wallets.length === 0) {
      return [];
    }
    return wallets
      .filter(data => ownedWallets.includes(data.args.contractAddress))
      .map((data: any) => {
        const wallet = data?.args;
        return {
          label: wallet.name,
          key: wallet.contractAddress,
        };
      });
  };

  const fetchWalletData = async () => {
    if (
      walletData &&
      chain &&
      walletData[chain.id] &&
      walletData[chain.id].selectedWalletAddress &&
      deployedWalletInfo &&
      signer
    ) {
      const walletAddress: string = walletData[chain.id].selectedWalletAddress as any;
      const walletContract = new ethers.Contract(walletAddress, deployedWalletInfo?.abi, signer);

      const signaturesRequired = await walletContract.signaturesRequired();
      const numberOfOwners = await walletContract.numberOfOwners();
      const nonce = await walletContract.nonce();
      const owners = [];

      for (let index = 0; index < numberOfOwners.toString(); index++) {
        const owner = await walletContract.owners(index);
        owners.push(owner);
      }
      setWalletContract(walletContract);
      setSignaturesRequired(signaturesRequired.toString());
      setNumberOfOwners(numberOfOwners.toString());
      setNonce(nonce.toString());
      setWalletOwners(owners);
      setCurrentWalletAddress(walletAddress);
      setWalletAddress(walletAddress || "");
    }
  };

  const updateCreate2 = async () => {
    const rcpt = await create2Data?.wait();
    setRefreshToggle(!refreshToggle);
    setIsNewWalletCreated(true);
  };

  const onNewProposal = async () => {
    setIsProposalModalOpen(true);
  };

  const loadTxPool = async () => {
    const nonce = await walletContract?.nonce();
    const response = await axios.post("/api/pool", {
      reqType: ROUTE_TYPES.GET_POOL,
      walletAddress: walletContract?.address,
      currentNonce: nonce.toString(),
      chainId: chain?.id,
      tx_type: TX_STATUS.IN_QUEUE,
    });

    setTxPool(response.data.data);

    const response2 = await axios.post("/api/pool", {
      reqType: ROUTE_TYPES.GET_POOL,
      walletAddress: walletContract?.address,
      currentNonce: nonce.toString(),
      chainId: chain?.id,
      tx_type: TX_STATUS.COMPLETED,
    });
    setTxPoolHistory(response2.data.data);
    // toast.dismiss();
  };

  const onSign = async (item: any, isCancel = false, isNonceUpdate = false) => {
    const toastId = notification.loading("wait signing !");
    if (isCancel) {
      item.data = "0x";
      item.amount = 0;
    }

    if (isNonceUpdate) {
      item.nonce = editedTxNonce;
    }

    const newHash = await walletContract?.getTransactionHash(
      item.nonce,
      item.to,
      ethers.utils.parseEther("" + parseFloat(item.amount).toFixed(12)),
      item.data,
    );

    const signature = await signer?.signMessage(ethers.utils.arrayify(newHash));
    const recover = await walletContract?.recover(newHash, signature);
    const isOwner = await walletContract?.isOwner(recover);
    if (isOwner) {
      // eslint-disable-next-line prefer-const
      let { txId, walletAddress, signers, signatures, cancel_signatures, cancel_signers } = item;
      let reqData;
      // on normal sign
      if (!isCancel && !isNonceUpdate) {
        reqData = {
          txId,
          walletAddress,
          chainId: chain?.id,
          newData: {
            signatures: [...new Set([...signatures, signature])],
            signers: [...new Set([...signers, address])],
            cancel_signatures: [],
            cancel_signers: [],
            isCancel: false,
          },
        };
      }

      if (isCancel) {
        if (!cancel_signatures || !cancel_signers) {
          cancel_signatures = [];
          cancel_signers = [];
        }
        reqData = {
          txId,
          walletAddress,
          chainId: chain?.id,
          newData: {
            cancel_hash: newHash,
            cancel_amount: "0",
            cancel_data: "0x",
            cancel_signatures: [...new Set([...cancel_signatures, signature])],
            cancel_signers: [...new Set([...cancel_signers, address])],
            signatures: [],
            signers: [],
            isCancel: true,
          },
        };
      }

      if (isNonceUpdate) {
        reqData = {
          txId,
          walletAddress,
          chainId: chain?.id,
          newData: {
            nonce: editedTxNonce,
            hash: newHash,
            signatures: [],
            signers: [],
            cancel_signatures: [],
            cancel_signers: [],
          },
        };
      }

      const res = await axios.post(`/api/pool`, { reqType: ROUTE_TYPES.UPDATE_TX, ...reqData });
      setEditedTxNonce(undefined);
      setIsConfirmNonceOpen(false);

      setTimeout(() => {
        toast.dismiss(toastId);
        setTogglePool(() => !togglePool);
      }, 1000);
    }
  };

  const sortSignatures = async (allSigs, newHash) => {
    const sigList = [];
    for (const sig in allSigs) {
      const recover = await walletContract?.recover(newHash, allSigs[sig]);
      sigList.push({ signature: allSigs[sig], signer: recover });
    }

    sigList.sort((a: any, b: any) => {
      return ethers.BigNumber.from(a.signer).sub(ethers.BigNumber.from(b.signer));
    });

    const finalSigList = [];
    const finalSigners = [];
    const used = {};
    for (const sig in sigList) {
      //@ts-ignore
      if (!used[sigList[sig].signature]) {
        finalSigList.push(sigList[sig].signature);
        finalSigners.push(sigList[sig].signer);
      }
      //@ts-ignore
      used[sigList[sig].signature] = true;
    }

    return [finalSigList, finalSigners];
  };

  const onExecute = async (item, isCancel = false) => {
    // override values for cancel tx
    if (isCancel) {
      item.data = item.cancel_data;
      item.signatures = [...item.cancel_signatures];
      item.hash = item.cancel_hash;
      item.amount = item.cancel_amount;
    }

    const newHash = await walletContract?.getTransactionHash(
      item.nonce,
      item.to,
      ethers.utils.parseEther("" + parseFloat(item.amount).toFixed(12)),
      item.data,
    );
    // const [finalSigList, finalSigners] = await sortSignatures(item.signatures, newHash);
    const [finalSigList, finalSigners] = await sortSignatures(item.signatures, item.hash);
    let finalGaslimit = 250000;

    try {
      // get estimate gas for a execute tx
      let estimateGasLimit: any = await walletContract?.estimateGas.executeTransaction(
        item.to,
        ethers.utils.parseEther("" + parseFloat(item.amount).toFixed(12)),
        item.data,
        finalSigList,
      );
      estimateGasLimit = await estimateGasLimit?.toNumber();

      // console.log("estimateGasLimit", estimateGasLimit);

      // add extra 100k gas limit
      finalGaslimit = estimateGasLimit + 100000;
      const executeFunc = walletContract?.executeTransaction(
        item.to,
        ethers.utils.parseEther("" + parseFloat(item.amount).toFixed(12)),
        item.data,
        finalSigList,
        { gasLimit: finalGaslimit },
      );
      const tx = await Tx(executeFunc);
      const rcpt = await tx?.wait();
      setTogglePool(!togglePool);
    } catch (e) {
      notification.error(e.message);
      console.log("error in execution");
    }
  };

  const onAddOwner = async () => {
    if (ethers.utils.isAddress(ownerAddress)) {
      setOwnersAddress([...new Set([...ownersAddress, ownerAddress])]);
      setOwnerAddress("");
    } else {
      setOwnerAddress("");
    }
  };

  const onTxNonceUpdate = (value: number) => {
    if (!isNaN(value)) {
      setEditedTxNonce(value);
    }
  };

  const onConfirmNonceUpdate = (item: any) => {
    if (editedTxNonce < nonce) {
      toast.error("nonce should be greater than current nonce");
      return;
    }
    setCurrentTxData(item);
    setIsConfirmNonceOpen(true);
  };

  const onSelectTx = (txId: number, selected: boolean) => {
    if (selected) {
      setSelectedTxs([...new Set([...selectedTxs, txId])]);
    } else {
      setSelectedTxs([...new Set([...selectedTxs].filter(id => txId !== id))]);
    }
  };

  const onBatchExecute = async () => {
    try {
      const toExecutedPool = txPool
        .filter(item => {
          return selectedTxs.includes(item.txId);
        })
        .sort((itemA, itemB) => itemA.nonce - itemB.nonce);

      const batchValues: { nonce: number[]; to: string[]; value: any[]; data: string[]; signatures: string[][] } = {
        nonce: [],
        to: [],
        value: [],
        data: [],
        signatures: [],
      };
      // let i = +toExecutedPool[0].nonce;
      let i = +nonce;
      let isExecutable = false;

      for (const iterator of toExecutedPool) {
        if (+iterator.nonce === i) {
          batchValues.nonce.push(iterator.nonce);
          batchValues.to.push(iterator.to);
          batchValues.value.push(ethers.utils.parseEther("" + parseFloat(iterator.amount).toFixed(12)));
          batchValues.data.push(iterator.data);
          batchValues.signatures.push(iterator.signatures);
          isExecutable = true;
        }

        if (+iterator.nonce !== i) {
          isExecutable = false;
          break;
        }

        i += 1;
      }

      if (isExecutable) {
        const batchExecuteFunc = walletContract?.executeBatch(
          batchValues.to,
          batchValues.value,
          batchValues.data,
          batchValues.signatures,
          { gasLimit: 1000000 },
        );

        const tx = await Tx(batchExecuteFunc);
        const rcpt = await tx?.wait();
        setSelectedTxs([]);
      } else {
        toast.error("Selected transaction nonce order is incorrect or verify batch tx starting from current nonce!");
      }
    } catch (error: any) {
      notification.error(error.message);
    }
  };

  const onShare = async (type: "wallet" | "tx", txId = 0) => {
    if (type === "wallet") {
      const walletUrl = `${window.location.origin}/wallet/${chain?.id}/${currentWalletAddress}/${txId}`;
      copy(walletUrl);
      toast.success("wallet url copied !");
    }

    if (type === "tx") {
      const walletUrl = `${window.location.origin}/wallet/${chain?.id}/${currentWalletAddress}/${txId}`;
      copy(walletUrl);
      toast.success("tx url copied !");
    }
  };

  const onShowAllTx = async () => {
    const currentUrl = window.location.href;
    const splitUrl = currentUrl.split("/");
    // remove tx id
    const newUrl = splitUrl.slice(0, splitUrl.length - 1).join("/");
    // load url with tx 0 to display all tx pool
    window.location.href = newUrl + "/" + 0;
  };

  // useEffects
  useEffect(() => {
    if (deployedFactoryInfo && signer && deployedFactoryInfo) {
      const factoryContract = new ethers.Contract(deployedFactoryInfo?.address, deployedFactoryInfo?.abi, signer);
      setFactoryContract(factoryContract);
    }
  }, [deployedFactoryInfo, signer]);

  useEffect(() => {
    if (chains.length > 0) {
      setChainData(chains.filter(item => [11155111, 31337, 5].includes(item.id)));
    }
  }, [chains]);

  useEffect(() => {
    if (chain) {
      setSelectedNetwork(chain.name);
    }
  }, [chain]);

  useEffect(() => {
    if (address) {
      setOwnersAddress([...new Set([...ownersAddress, address])]);
    }
  }, [address]);

  // load wallets
  useEffect(() => {
    if (wallets.length > 0 && owners.length > 0 && address && signer && deployedWalletInfo) {
      void loadWallets(address);
    }
  }, [wallets, address, owners, signer, deployedWalletInfo]);

  useEffect(() => {
    if (walletData && chain && signer) {
      void fetchWalletData();
    }
  }, [toggleChangeWallet, chain, signer, togglePool]);

  useEffect(() => {
    if (create2Data) {
      void updateCreate2();
    }
  }, [create2Data]);

  useEffect(() => {
    if (debounceWalletName) {
      void loadComputedAddress();
    }
  }, [debounceWalletName]);

  useEffect(() => {
    if (walletContract && chain && isProposalModalOpen === false) {
      void loadTxPool();
    }
  }, [chain, walletContract, isProposalModalOpen, togglePool]);

  // update global states

  useEffect(() => {
    if (walletContract && txPool) {
      setCurrentWalletContract(walletContract);
      setTxPoolLength(txPool.length);
    }
  }, [walletContract, txPool]);

  // dynamic values
  const walletList = [...filterWallets()];

  if (isSharedWallet && chain && walletData && walletData[chain.id]) {
    const { selectedWalletAddress, selectedWalletName } = walletData[chain?.id];
    walletList.push({ label: selectedWalletName, key: selectedWalletAddress });
  }

  const isWalletOwner = address && !walletOwners.includes(address) ? true : false;

  const isSharedChainMatch = chain && chain.id === +chainId;
  const targetedNetworkData = chains.filter(item => item.id === +chainId)[0];

  // pool tx's bg colors
  const getPoolTxBackgroundColor = (item: any) => {
    // its replaced tx so color would be yellow
    if (item.nonce === nonce) {
      return isDarkMode ? "bg-base-100  border-2 rounded-lg border-green-400" : "bg-green-50";
    } else if (item.cancel_signatures && item.cancel_signatures.length > 0) {
      return isDarkMode ? "bg-base-100  border-2 rounded-lg border-red-400" : "bg-red-50";
    }
  };

  // history tx's bg colors
  const getHistoryTxBackgroundColor = (item: any) => {
    // its replaced tx so color would be yellow
    if (item.isCancel === undefined) {
      return isDarkMode ? "bg-base-100 border-2 border-yellow-300" : "bg-yellow-100";
    } else if (item.isCancel) {
      return isDarkMode ? "bg-base-100 border-2 rounded-lg border-red-400" : "bg-red-50";
    } else if (item.isCancel === false) {
      return isDarkMode ? "border-2 rounded-lg border-green-400" : "bg-green-50";
    }
  };

  return (
    <div
      className="bg-base-200"
      onClick={() => {
        setActiveTab(undefined);
      }}
    >
      <ConfirmNonceModal
        isModalOpen={isConfirmNonceOpen}
        setIsModalOpen={setIsConfirmNonceOpen}
        onSign={onSign}
        data={currentTxData}
      />

      {isSharedWallet && isSharedChainMatch === false && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50 flex items-center">
          <div>
            You need to be on
            <span className="badge-primary badge-md rounded-2xl mr-2">
              {targetedNetworkData && targetedNetworkData.name}
            </span>
            chain
          </div>
          <button
            className="btn btn-xs btn-error ml-2"
            onClick={() => {
              switchNetwork?.(+chainId);
            }}
          >
            switch
          </button>
        </div>
      )}

      {isConnected === false && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50">
          {/* <ConnectButton label="Connect" /> */}
          <div className="text-primary-focus">Connect your wallet to see multisig !</div>
        </div>
      )}

      <Head>
        <title>Multisig</title>
        <meta name="description" content="multisig" />
      </Head>

      <div
        className={`flex flex-col items-start ml-32 mt-6  w-[80%] ${
          isConnected === false || (isSharedChainMatch === false && isSharedWallet) ? "blur-sm pointer-events-none" : ""
        } `}
        aria-disabled={isConnected === false}
      >
        {/* header action */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center my-5 ">
            <div className="text-xl font-bold -ml-2">
              {currentWalletName.length > 15 ? currentWalletName?.slice(0, 15) + "..." : currentWalletName}
            </div>
            <div className="text-2xl font-bold mt-2">
              <Balance address={isConnected ? currentWalletAddress : previewAddress} className="text-lg font-bold" />
            </div>

            <div className="text-gray-500 text-xs">Wallet Balance</div>
          </div>

          <div className="">
            {walletList.length > 0 && (
              <button className="btn btn-primary" onClick={onNewProposal} disabled={isWalletOwner}>
                <span className="mr-1">
                  <PlusCircleIcon width={15} />
                </span>
                <span>New Proposal</span>
              </button>
            )}

            {walletList.length == 0 && (
              <button className="btn btn-primary" onClick={() => setIsCreateWalletModalOpen(true)}>
                <span className="mr-1">
                  <PlusCircleIcon width={15} />
                </span>
                <span>Create wallet</span>
              </button>
            )}

            <div className="mt-4">
              {/* PROPOSAL MODAL */}
              <ProposalModal
                isProposalModalOpen={isProposalModalOpen}
                setIsProposalModalOpen={setIsProposalModalOpen}
                walletContract={walletContract}
                signer={signer}
                chainId={chain?.id}
                address={address}
                nonce={nonce}
                poolTxNumber={txPool?.length}
              />
            </div>
          </div>
        </div>

        {/*  */}
        {/* select options */}
        <div className={`mt-5 flex justify-start  w-[100%]`}>
          <div
            className={`${isSharedWallet && "tooltip tooltip-primary"}`}
            data-tip={isSharedWallet && "Goto home menu to change network"}
          >
            <select
              disabled={isSharedWallet}
              className="select select-sm  max-w-xs"
              style={{ borderWidth: 1, borderColor: chain && (chain as any).color }}
              onChange={event => {
                switchNetwork?.(+event.target.value);
              }}
            >
              <option disabled>Select network</option>
              {chainData &&
                chainData.map(data => (
                  <option
                    key={data.name}
                    value={data.id}
                    style={{ color: (data as any).color }}
                    selected={selectedNetwork === data.name}
                  >
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
          <div
            className={`ml-auto w-[23%] ${walletList.length === 0 && isConnected && "invisible"} ${
              isSharedWallet && "tooltip tooltip-primary"
            }`}
            data-tip={isSharedWallet && "Goto home menu to change wallet"}
          >
            <select
              className="select select-sm max-w-xs"
              disabled={isSharedWallet}
              onChange={event => {
                const selectedWallet = JSON.parse(event.target.value);
                if (selectedWallet) {
                  onChangeWallet(selectedWallet?.key, selectedWallet.label);
                }
              }}
            >
              <option disabled>Select wallet</option>
              {walletList.length > 0 &&
                walletList.map(data => {
                  return (
                    <option
                      key={data.key}
                      value={JSON.stringify(data)}
                      selected={
                        chain && walletData[chain?.id] ? walletData[chain?.id].selectedWalletAddress == data.key : false
                      }
                    >
                      {data && data.label && data.label.length > 15 ? data.label?.slice(0, 15) + "..." : data.label}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className={`w-[15%] ${walletList.length === 0 && isConnected && "invisible"}`}>Your wallet</div>
        </div>

        {/* main view */}
        {/* tabs */}
        <div className={`mt-2 flex justify-start w-full ${walletList.length === 0 && isConnected && "hidden"}`}>
          <div className="w-[80%]">
            <div className="tabs">
              <a
                className={`tab tab-lifted ${MAIN_TABS.POOL === currentTab && "tab-active"}`}
                onClick={() => onChangeTab(MAIN_TABS.POOL)}
              >
                Pool
              </a>
              <a
                className={`tab tab-lifted ${MAIN_TABS.HISTORY === currentTab && "tab-active"}`}
                onClick={() => onChangeTab(MAIN_TABS.HISTORY)}
              >
                History
              </a>
            </div>
            {/* pool content */}
            {MAIN_TABS.POOL === currentTab && (
              <div className="w-[95%] mt-4 -absolute">
                <div className="m-2">
                  {selectedTxs.length > 0 && (
                    <div className="z-50 flex justify-start items-center">
                      <button
                        className="btn btn-sm btn-success capitalize tooltip tooltip-warning"
                        onClick={onBatchExecute}
                        disabled={isWalletOwner}
                        data-tip="Make sure the selected transaction has an incremental nonce"
                      >
                        {/* Execute {selectedTxs.length} tx */}
                        <RocketLaunchIcon width={19} className="" />
                      </button>
                      <div className="text-xs ml-2 opacity-50">Execute {selectedTxs.length} tx in batch</div>
                    </div>
                  )}
                  {+txId !== 0 && (
                    <button className="btn btn-xs btn-warning" onClick={onShowAllTx}>
                      Show all transactions
                    </button>
                  )}
                </div>
                {txPool &&
                  txPool.length > 0 &&
                  txPool
                    .filter(item => {
                      return +txId !== 0 ? +item.txId === +txId : true;
                    })
                    .sort((dataA, dataB) => dataA.nonce - dataB.nonce)
                    .map((data, index) => {
                      return (
                        <div
                          key={data.txId}
                          // tabIndex={0}
                          className={`collapse collapse-arrow border border-base-300 bg-base-100  rounded-lg m-2 ${
                            activeTab === index && "collapse-open"
                          }`}
                          onClick={event => {
                            event.stopPropagation();
                            if (index !== activeTab) {
                              setActiveTab(index);
                            } else {
                              setActiveTab(undefined);
                            }
                          }}
                        >
                          <div
                            className={`collapse-title text-sm font-medium flex justify-around items-center ${getPoolTxBackgroundColor(
                              data,
                            )}`}
                          >
                            <div>
                              <input
                                type="checkbox"
                                checked={selectedTxs.length > 0 && selectedTxs.includes(data.txId) ? true : false}
                                disabled={
                                  (data.cancel_signatures && data.cancel_signatures.length > 0) ||
                                  data.signatures.length === 0
                                }
                                className="checkbox checkbox-primary checkbox-sm"
                                onClick={event => {
                                  event.stopPropagation();
                                }}
                                onChange={event => {
                                  onSelectTx(data.txId, event.target.checked);
                                }}
                              />
                            </div>
                            <div># {data.nonce}</div>
                            <div>{data.type}</div>
                            <div>{data.createdAt}</div>
                            <div>
                              <button
                                className="btn btn-ghost btn-success btn-outline btn-sm text-xs"
                                onClick={() => {
                                  onSign(data);
                                }}
                                disabled={isWalletOwner}
                              >
                                {data.signatures.length + "/" + signaturesRequired} Sign
                              </button>
                            </div>

                            <div>
                              <button
                                className="btn btn-ghost btn-warning btn-outline btn-sm text-xs"
                                onClick={() => onExecute(data)}
                                disabled={isWalletOwner}
                              >
                                Execute
                              </button>
                            </div>

                            <div>
                              <ShareIcon
                                width={19}
                                className="cursor-pointer text-primary"
                                onClick={() => onShare("tx", data.txId)}
                              />
                            </div>
                          </div>
                          <div className="collapse-content bg-base-300">
                            <div className="overflow-x-auto mt-2">
                              <table className="table table-zebra w-full">
                                <tbody>
                                  {Object.keys(data)
                                    .filter(keyName => !skipTxKey.includes(keyName))
                                    .map(keyName => (
                                      <tr
                                        key={keyName}
                                        className="hover"
                                        onClick={event => {
                                          event.stopPropagation();
                                        }}
                                      >
                                        <td></td>
                                        <td>{keyName}</td>

                                        <td>
                                          {ethers.utils.isAddress(data[keyName]) ||
                                          [
                                            "hash",
                                            "data",
                                            "cancel_hash",
                                            "cancel_data",
                                            "addSigner",
                                            "removeSigner",
                                          ].includes(keyName) ? (
                                            <Address address={data[keyName]} />
                                          ) : keyName == "amount" ? (
                                            Number(data[keyName]).toFixed(4)
                                          ) : keyName == "nonce" ? (
                                            <div className="w-[60%] flex justify-end items-center">
                                              <InputBase
                                                onChange={onTxNonceUpdate}
                                                value={editedTxNonce !== undefined ? editedTxNonce : data[keyName]}
                                                placeholder="Enter new nonce"
                                              />
                                              {Boolean(editedTxNonce) && (
                                                <button
                                                  className="btn btn-xs btn-primary m-2"
                                                  onClick={() => onConfirmNonceUpdate(data)}
                                                  disabled={isWalletOwner}
                                                >
                                                  update
                                                </button>
                                              )}
                                            </div>
                                          ) : [
                                              "signatures",
                                              "signers",
                                              "cancel_signatures",
                                              "cancel_signers",
                                              "split_addresses",
                                              "cancel_signatures",
                                              "cancel_signers",
                                              "cancel_hash",
                                            ].includes(keyName) ? (
                                            data[keyName] &&
                                            data[keyName].length > 0 && (
                                              <>
                                                {data[keyName].map((value: string, index: number) => (
                                                  <div key={index}>
                                                    <Address address={value} />
                                                  </div>
                                                ))}
                                              </>
                                            )
                                          ) : (
                                            data[keyName]
                                          )}
                                        </td>
                                        <td></td>
                                      </tr>
                                    ))}

                                  <tr className="hover">
                                    <td></td>
                                    <td className="text-red-600">Cancel Transaction</td>
                                    <td className="flex justify-start">
                                      <button
                                        className="btn btn-error btn-outline btn-xs m-2 "
                                        disabled={isWalletOwner}
                                        onClick={event => {
                                          event.stopPropagation();
                                          onSign(data, true);
                                        }}
                                      >
                                        {data.cancel_signatures &&
                                          data.cancel_signatures.length + "/" + signaturesRequired}{" "}
                                        Cancel sign
                                      </button>
                                      <button
                                        className="btn btn-error btn-outline btn-xs m-2"
                                        disabled={isWalletOwner}
                                        onClick={event => {
                                          event.stopPropagation();
                                          onExecute(data, true);
                                        }}
                                      >
                                        Execute cancel
                                      </button>
                                    </td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                {txPool.length === 0 && <div className="flex justify-center text-gray-400 mt-2">No transactions !</div>}
              </div>
            )}
            {MAIN_TABS.HISTORY === currentTab && (
              <div className="w-[95%] mt-4 -absolute">
                {txPoolHistory &&
                  txPoolHistory.length > 0 &&
                  txPoolHistory
                    .sort((dataA, dataB) => dataB.nonce - dataA.nonce)
                    .map((data, index) => {
                      return (
                        <div
                          key={data.txId}
                          className={`collapse collapse-arrow border border-base-300  rounded-lg m-2 ${
                            activeTab === index && "collapse-open"
                          }`}
                          onClick={event => {
                            event.stopPropagation();
                            if (index !== activeTab) {
                              setActiveTab(index);
                            } else {
                              setActiveTab(undefined);
                            }
                          }}
                        >
                          <div
                            className={`collapse-title text-sm font-medium flex justify-around rounded-lg ${getHistoryTxBackgroundColor(
                              data,
                            )}
                            `}
                          >
                            <div># {data.nonce}</div>
                            <div>{data.type}</div>
                            <div>{data.createdAt}</div>
                          </div>
                          <div className="collapse-content bg-base-300">
                            <div className="overflow-x-auto mt-2">
                              <table className="table table-zebra w-full">
                                <tbody>
                                  {Object.keys(data)
                                    .filter(keyName => !skipTxKey.includes(keyName))
                                    .map(keyName => (
                                      <tr key={keyName} className="hover">
                                        <td></td>
                                        <td>{keyName}</td>

                                        <td>
                                          {ethers.utils.isAddress(data[keyName]) ||
                                          [
                                            "hash",
                                            "data",
                                            "cancel_data",
                                            "cancel_hash",
                                            "addSigner",
                                            "removeSigner",
                                          ].includes(keyName) ? (
                                            <Address address={data[keyName]} />
                                          ) : keyName == "amount" ? (
                                            Number(data[keyName]).toFixed(4)
                                          ) : [
                                              "signatures",
                                              "signers",
                                              "cancel_signatures",
                                              "cancel_signers",
                                              "split_addresses",
                                            ].includes(keyName) ? (
                                            data[keyName] &&
                                            data[keyName].length > 0 && (
                                              <>
                                                {data[keyName].map((value: string, index: any) => (
                                                  <div key={index}>
                                                    <Address address={value} />
                                                  </div>
                                                ))}
                                              </>
                                            )
                                          ) : (
                                            data[keyName]
                                          )}
                                        </td>
                                        <td></td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                {txPoolHistory.length === 0 && (
                  <div className="flex justify-center text-gray-400 mt-2">No transactions history !</div>
                )}
              </div>
            )}
          </div>

          {/* side view */}
          <div className="flex flex-col items-center justify-center absolute right-28">
            <div className="flex flex-col items-center justify-center  bg-base-300 rounded-2xl h-44">
              {walletData && chain && walletData[chain.id] && (walletData[chain.id].selectedWalletAddress as any) && (
                <QRCode
                  value={walletData && chain && (walletData[chain.id].selectedWalletAddress as any)}
                  style={{ height: "90%", margin: 5 }}
                />
              )}

              {isConnected === false && <QRCode value={previewAddress} style={{ height: "90%", margin: 5 }} />}
            </div>

            <div className="mt-2 flex items-center">
              <Address
                address={walletData && chain && walletData[chain.id] && walletData[chain.id].selectedWalletAddress}
              />
              <div className="ml-2">
                <ShareIcon width={19} className="cursor-pointer text-primary" onClick={() => onShare("wallet")} />
              </div>
            </div>
            <div className="mt-2 text-sm">
              Nonce : <span className="font-bold">{nonce}</span>
            </div>

            <div className="mt-2 text-sm">
              Signature{"'"}s :
              <span className="font-bold">
                {signaturesRequired} / {numberOfOwners}{" "}
              </span>
            </div>

            <div className="mt-4 flex flex-col items-center justify-center bg-base-100 rounded-2xl w-60">
              <div className="text-sm">Owners</div>
              {walletOwners &&
                walletOwners.length > 0 &&
                walletOwners.map(owner => {
                  return (
                    <div key={owner}>
                      <Address address={owner} />
                    </div>
                  );
                })}
            </div>

            <div className="mt-4">
              {/* The button to open modal */}
              <label
                htmlFor="my-modal"
                className="btn btn-primary btn-xs"
                onClick={() => {
                  setIsCreateWalletModalOpen(true);
                }}
              >
                Create wallet
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* CREATE WALLET MODAL  */}
      <input type="checkbox" id="my-modal" className="modal-toggle" checked={isCreateWalletModalOpen} />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create a new wallet</h3>
          {/* <p className=""></p> */}
          <div className="">
            <div className="m-2">
              <InputBase onChange={setWalletName} value={walletName} placeholder="Enter wallet name" />
              <div className="m-2">
                {debounceWalletName && !isWalletExists && (
                  <>
                    <div className="text-gray-400 text-xs">Computed wallet address</div>{" "}
                    <Address address={computedWalletAddress} />
                  </>
                )}

                {isWalletExists && (
                  <>
                    <div className="text-red-400 text-xs">Wallet already exists try another name</div>
                  </>
                )}
              </div>
            </div>
            <div className="m-2 flex flex-col items-start">
              <div className="flex">
                <AddressInput onChange={setOwnerAddress} value={ownerAddress} placeholder="Enter owner address" />
                <button className="btn btn-accent btn-sm" onClick={onAddOwner} disabled={!ownerAddress}>
                  +
                </button>
              </div>
              <div className="flex flex-col m-2">
                {ownersAddress.map(ownerAddress => {
                  return (
                    <div key={ownerAddress}>
                      <div className="flex justify-between items-center">
                        <Address address={ownerAddress} />
                        <button onClick={() => onRemoveAddress(ownerAddress)} disabled={ownerAddress === address}>
                          {ownerAddress !== address && <MinusCircleIcon color="red" width={20} />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="m-2">
              <InputBase
                onChange={value => {
                  if (!isNaN(+value)) {
                    setSignatures(+value);
                  }
                }}
                value={signatures ? signatures : ""}
                placeholder="Enter threshold"
              />
            </div>
            <div className="m-2">
              <EtherInput
                onChange={setWalletAmount}
                value={walletAmount as string}
                placeholder="Enter initial amount (optional)"
              />
            </div>
          </div>
          <div className="modal-action">
            {!isNewWalletCreated && (
              <label
                htmlFor={isCreateWalletModalOpen === true ? "my-modal" : ""}
                className="btn btn-primary"
                onClick={async () => {
                  await onCreateWallet();
                }}
              >
                Create
              </label>
            )}
            {isNewWalletCreated && (
              <label
                htmlFor={isCreateWalletModalOpen === true ? "my-modal" : ""}
                className="btn btn-warning "
                onClick={async () => {
                  // onChangeWallet(computedWalletAddress, walletName);

                  if (chain) {
                    setWalletData({
                      ...walletData,
                      [chain?.id]: {
                        selectedWalletAddress: computedWalletAddress,
                        selectedWalletName: debounceWalletName,
                      },
                    });
                    if (isSharedWallet) {
                      window.open("/");
                    } else {
                      window.location.reload();
                    }
                  }
                }}
              >
                Switch
              </label>
            )}

            <label
              htmlFor={isCreateWalletModalOpen === true ? "my-modal" : ""}
              className="btn btn-primary btn-outline"
              onClick={() => setIsCreateWalletModalOpen(false)}
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
