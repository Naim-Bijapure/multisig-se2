import { useEffect } from "react";
import { useRouter } from "next/router";
import WalletConnect from "@walletconnect/client";
import Core from "@walletconnect/core";
import { buildApprovedNamespaces } from "@walletconnect/utils";
import { Web3Wallet } from "@walletconnect/web3wallet";
import SafeApps from "~~/components/multisig/SafeApps";
import { useAppStore } from "~~/services/store/store";

// const appUrl = "http://localhost:3001";
const URI =
  "wc:61f5e26a-1496-4d7c-85f5-0c188cc990a2@1?bridge=https%3A%2F%2Fd.bridge.walletconnect.org&key=9e9fce479d15acbb18ff989ef6ee0da93787565dc417786861a8d922d7edaeac";

const WallectConnectPage = () => {
  const router = useRouter();

  const walletAddress = useAppStore(state => state.walletAddress);

  useEffect(() => {
    if (!walletAddress) {
      router.push("/");
    }
    loadWC();
  }, [walletAddress]);

  const loadWC = async () => {
    const core = new Core({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    });

    const web3wallet = await Web3Wallet.init({
      core, // <- pass the shared `core` instance
      metadata: {
        name: "Demo app",
        description: "Demo Client as Wallet/Peer",
        url: "www.walletconnect.com",
        icons: [],
      },
    });

    // const pairingParams = web3wallet.core.pairing.pair({ uri: URI });
    // console.log(`n-🔴 => loadWC => pairingParams:`, pairingParams);

    const getWalletConnectVersion = (uri: string): string => {
      const encodedURI = encodeURI(uri);
      const version = encodedURI?.split("@")?.[1]?.[0];

      return version;
    };
    const version = getWalletConnectVersion(URI);
    console.log(`n-🔴 => loadWC => version:`, version);

    // web3wallet.on("session_proposal", async proposal => {
    //   const { id, params } = proposal;
    //   const approvedNamespaces = buildApprovedNamespaces({
    //     proposal: params,
    //     supportedNamespaces: {
    //       eip155: {
    //         chains: ["eip155:1", "eip155:137"],
    //         methods: ["eth_sendTransaction", "personal_sign"],
    //         events: ["accountsChanged", "chainChanged"],
    //         accounts: [
    //           "eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
    //           "eip155:137:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
    //         ],
    //       },
    //     },
    //   });
    //   const session = await web3wallet.approveSession({
    //     id: proposal.id,
    //     namespaces: approvedNamespaces,
    //   });
    //   await web3wallet.core.pairing.pair({ uri: URI });
    // });
  };

  return (
    <div className="">
      {/* <SafeApps isWC={true} /> */}
      test
    </div>
  );
};

export default WallectConnectPage;
