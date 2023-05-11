import { useRouter } from "next/router";
import Home from "~~/components/multisig/Home";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <Home
        chainId={router.query.chainId as string}
        walletAddress={router.query.address as string}
        isSharedWallet={true}
      />
    </>
  );
};

export default Page;
