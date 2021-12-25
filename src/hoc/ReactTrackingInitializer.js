import * as React from "react";
import { useTracking } from "react-tracking";
import DDlog from "../mock3rdParty/DataDog";
import { useFetchCurrentUser } from "../services/users/Queries/useFetchCurrentUser";
import Heap from "../mock3rdParty/Heap";

const ReactTrackingInitializer = ({ children }) => {
  const { data } = useFetchCurrentUser();
  const { Track } = useTracking(
    {
      // this is where the initialize data put
      trackVersion: "1.0.0",
      data: { user: data },
    },
    {
      dispatch: (trackedData) => {
        console.log("dispatchData", trackedData);
        const { eventName, ...restOfData } = trackedData.data;
        switch (trackedData.type) {
          case "product":
            Heap.track(eventName, restOfData);
            break;
          case "error":
            DDlog.error(eventName, restOfData);
            break;
          default:
            break;
        }
      },
    }
  );

  return <Track>{children}</Track>;
};

export default ReactTrackingInitializer;
