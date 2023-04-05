import { useCallback, useEffect, useState } from "react";
import { useBalance, useNetwork } from "wagmi";
import { useAppStore } from "~~/services/store/store";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

export function useAccountBalance(address?: string) {
  const [isEthBalance, setIsEthBalance] = useState(true);
  const [balance, setBalance] = useState<number | null>(null);
  const price = useAppStore(state => state.ethPrice);
  const { chain } = useNetwork();

  const {
    data: fetchedBalanceData,
    isError,
    isLoading,
  } = useBalance({
    address,
    watch: true,
    // chainId: getTargetNetwork().id,
    chainId: chain?.id,
  });

  const onToggleBalance = useCallback(() => {
    setIsEthBalance(!isEthBalance);
  }, [isEthBalance]);

  useEffect(() => {
    if (fetchedBalanceData?.formatted) {
      setBalance(Number(fetchedBalanceData.formatted));
    }
  }, [fetchedBalanceData]);

  return { balance, price, isError, isLoading, onToggleBalance, isEthBalance };
}
