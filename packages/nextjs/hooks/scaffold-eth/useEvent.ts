import { useCallback, useEffect, useState } from "react";

export const useEvent = (contract, eventName, refreshToggle) => {
  const [eventData, setEventData] = useState([]);

  const loadEvents = async () => {
    const filter = contract.filters[eventName]();
    const queryEvents = await contract.queryFilter(filter);
    setEventData(queryEvents);
  };

  // watch events and load recursively (we can use in future to update tx list)
  //   const loadEvents = () => {
  //     contract[contractName].on(eventName, function () {
  //       if (arguments.length > 0) {
  //         const event = arguments[arguments.length - 1];
  //         console.log(`n-🔴 => event`, event);
  //         setEventData(preData => [...preData, event]);
  //       }
  //     });
  //   };

  useEffect(() => {
    if (contract) {
      loadEvents();
    }
  }, [contract, eventName, refreshToggle]);
  return eventData;
};
