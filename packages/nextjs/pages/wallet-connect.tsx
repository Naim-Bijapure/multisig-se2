import { useEffect } from "react";
import { useRouter } from "next/router";
import SafeApps from "~~/components/multisig/SafeApps";
import { useAppStore } from "~~/services/store/store";

// const appUrl = "http://localhost:3001";

const WalletConnectPage = () => {
  const router = useRouter();

  const walletAddress = useAppStore(state => state.walletAddress);

  useEffect(() => {
    if (!walletAddress) {
      router.push("/");
    }
  }, [walletAddress]);

  return (
    <div className="">
      <SafeApps isWC={true} />
    </div>
  );
};

export default WalletConnectPage;
