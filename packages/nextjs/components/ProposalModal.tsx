import { useState } from "react";
import {
  Address,
  AddressInput,
  Balance,
  EtherInput,
  InputBase,
  ROUTE_TYPES,
  TX_STATUS,
} from "../components/scaffold-eth";
import axios from "axios";
import { ethers } from "ethers";
import moment from "moment";
import { type } from "os";

enum PROPOSAL_TYPES {
  SEND_ETH,
  MANAGE_OWNERS,
  CUSTOM_CALL,
}
export const ProposalModal = ({
  isProposalModalOpen,
  setIsProposalModalOpen,
  walletContract,
  signer,
  address,
  chainId,
}: {
  isProposalModalOpen: boolean;
  setIsProposalModalOpen: any;
  walletContract: ethers.Contract | undefined;
  signer: ethers.Signer | any;
  address: string | any;
  chainId: number | any;
}) => {
  const [currentTab, setCurrentTab] = useState<PROPOSAL_TYPES>(0);
  const [recipient, setRecipient] = useState<string>("");
  const [customCallData, setCustomCallData] = useState<string>("");
  const [signerAddress, setSignerAddress] = useState<string>("");
  const [manageOwnerType, setManageOwnerType] = useState<string>("");
  const [signatureRequired, setSignatureRequired] = useState<string>("");

  const [amount, setAmount] = useState<string>();

  const onChangeTab = (tabType: PROPOSAL_TYPES) => {
    setCurrentTab(tabType);
    setRecipient("");
    setCustomCallData("");
    setSignerAddress("");
    setManageOwnerType("");
    setSignatureRequired("");
  };
  const onPropose = async () => {
    try {
      if (PROPOSAL_TYPES.SEND_ETH === currentTab) {
        const callData = "0x";
        const executeToAddress = recipient;
        const nonce = await walletContract?.nonce();
        const newHash = await walletContract?.getTransactionHash(
          nonce,
          executeToAddress,
          ethers.utils.parseEther("" + parseFloat(amount ? amount : "0").toFixed(12)),
          callData,
        );
        const signature = await signer?.signMessage(ethers.utils.arrayify(newHash));
        const recover = await walletContract?.recover(newHash, signature);
        const isOwner = await walletContract?.isOwner(recover);
        const reqData = {
          txId: Date.now(),
          chainId: chainId,
          walletAddress: walletContract?.address,
          nonce: nonce?.toString(),
          to: executeToAddress,
          amount: amount ? amount : 0,
          data: callData,
          hash: newHash,
          signatures: [signature],
          signers: [recover],
          type: "transfer",
          status: TX_STATUS.IN_QUEUE,
          createdAt: moment().format("YYYY-MM-DD HH:mm"),
          // executedAt: "10-10-2023 10:10",
          createdBy: address,
          // executedBy: "0x0fAb64624733a7020D332203568754EB1a37DB89",
        };
        if (isOwner) {
          const res = await axios.post(`/api/pool`, { reqType: ROUTE_TYPES.ADD_TX, ...reqData });
        }
      }

      if (PROPOSAL_TYPES.MANAGE_OWNERS === currentTab) {
        const executeToAddress = walletContract?.address;
        const nonce = await walletContract?.nonce();

        const callData = walletContract?.interface?.encodeFunctionData(manageOwnerType, [
          signerAddress,
          signatureRequired,
        ]);

        const newHash = await walletContract?.getTransactionHash(
          nonce,
          executeToAddress,
          ethers.utils.parseEther("" + parseFloat(amount ? amount : "0").toFixed(12)),
          callData,
        );
        const signature = await signer?.signMessage(ethers.utils.arrayify(newHash));
        const recover = await walletContract?.recover(newHash, signature);
        const isOwner = await walletContract?.isOwner(recover);

        const reqData = {
          txId: Date.now(),
          chainId: chainId,
          walletAddress: walletContract?.address,
          nonce: nonce?.toString(),
          to: executeToAddress,
          amount: amount ? amount : 0,
          data: callData,
          hash: newHash,
          signatures: [signature],
          signers: [recover],
          type: manageOwnerType,
          status: TX_STATUS.IN_QUEUE,
          createdAt: moment().format("YYYY-MM-DD HH:mm"),
          // executedAt: "10-10-2023 10:10",
          createdBy: address,
          // executedBy: "0x0fAb64624733a7020D332203568754EB1a37DB89",
        };

        if (isOwner) {
          const res = await axios.post(`/api/pool`, { reqType: ROUTE_TYPES.ADD_TX, ...reqData });
        }
      }

      if (PROPOSAL_TYPES.CUSTOM_CALL === currentTab) {
        const executeToAddress = recipient;
        const nonce = await walletContract?.nonce();

        const callData = customCallData;

        const newHash = await walletContract?.getTransactionHash(
          nonce,
          executeToAddress,
          ethers.utils.parseEther("" + parseFloat(amount ? amount : "0").toFixed(12)),
          callData,
        );
        const signature = await signer?.signMessage(ethers.utils.arrayify(newHash));
        const recover = await walletContract?.recover(newHash, signature);
        const isOwner = await walletContract?.isOwner(recover);

        const reqData = {
          txId: Date.now(),
          chainId: chainId,
          walletAddress: walletContract?.address,
          nonce: nonce?.toString(),
          to: executeToAddress,
          amount: amount ? amount : 0,
          data: callData,
          hash: newHash,
          signatures: [signature],
          signers: [recover],
          type: "customCall",
          status: TX_STATUS.IN_QUEUE,
          createdAt: moment().format("YYYY-MM-DD HH:mm"),
          // executedAt: "10-10-2023 10:10",
          createdBy: address,
          // executedBy: "0x0fAb64624733a7020D332203568754EB1a37DB89",
        };

        if (isOwner) {
          const res = await axios.post(`/api/pool`, { reqType: ROUTE_TYPES.ADD_TX, ...reqData });
        }
      }
      setIsProposalModalOpen(false);
    } catch (error) {
      console.log("n-Error: ", error);
    }
  };

  return (
    <div className="">
      <input type="checkbox" id="my-modal" className="modal-toggle" checked={isProposalModalOpen} />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create a new proposal</h3>
          {/* <p className=""></p> */}
          <div className="">
            <div className="tabs">
              <a
                className={`tab tab-lifted ${PROPOSAL_TYPES.SEND_ETH === currentTab && "tab-active"}`}
                onClick={() => onChangeTab(PROPOSAL_TYPES.SEND_ETH)}
              >
                Send Eth
              </a>
              <a
                className={`tab tab-lifted ${PROPOSAL_TYPES.MANAGE_OWNERS === currentTab && "tab-active"}`}
                onClick={() => onChangeTab(PROPOSAL_TYPES.MANAGE_OWNERS)}
              >
                Manage owners
              </a>
              <a
                className={`tab tab-lifted ${PROPOSAL_TYPES.CUSTOM_CALL === currentTab && "tab-active"}`}
                onClick={() => onChangeTab(PROPOSAL_TYPES.CUSTOM_CALL)}
              >
                Custom call
              </a>
            </div>
            {/* body content */}
            <div>
              {PROPOSAL_TYPES.SEND_ETH === currentTab && (
                <div className="m-2">
                  <div className="m-2">
                    <AddressInput value={recipient} onChange={setRecipient} placeholder="Enter recipient address" />
                  </div>

                  <div className="m-2">
                    <EtherInput value={amount as string} onChange={setAmount} placeholder="Enter amount" />
                  </div>
                </div>
              )}
            </div>
            <div>
              {PROPOSAL_TYPES.MANAGE_OWNERS === currentTab && (
                <div>
                  <div className="m-2">
                    <select
                      className="select select-bordered select-sm w-full max-w-xs"
                      onChange={event => {
                        setManageOwnerType(event.target.value);
                      }}
                    >
                      <option disabled selected>
                        select type
                      </option>
                      <option value={"addSigner"}>Add signer</option>
                      <option value={"removeSigner"}>Remove signer</option>
                    </select>
                  </div>
                  <div className="m-2">
                    <AddressInput value={signerAddress} onChange={setSignerAddress} placeholder="Enter address" />
                  </div>

                  <div className="m-2">
                    <InputBase
                      onChange={setSignatureRequired}
                      value={signatureRequired}
                      placeholder="Enter new signer required"
                    />
                  </div>
                </div>
              )}
            </div>
            <div>
              {PROPOSAL_TYPES.CUSTOM_CALL === currentTab && (
                <div className="m-2">
                  <div className="m-2">
                    <AddressInput value={recipient} onChange={setRecipient} placeholder="Enter recipient address" />
                  </div>

                  <div className="m-2">
                    <InputBase
                      onChange={setCustomCallData}
                      value={customCallData}
                      placeholder="Enter custom call data"
                    />
                  </div>

                  <div className="m-2">
                    <EtherInput value={amount as string} onChange={setAmount} placeholder="Enter amount (optional)" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="modal-action">
            <button
              className="btn btn-primary"
              onClick={onPropose}
              disabled={
                currentTab === 0
                  ? !recipient || !amount
                  : currentTab === 1
                  ? !manageOwnerType || !signerAddress || !signatureRequired
                  : currentTab === 2
                  ? !recipient || !customCallData || !amount
                  : false
              }
            >
              Propose
            </button>

            <button className="btn btn-primary btn-outline" onClick={() => setIsProposalModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
