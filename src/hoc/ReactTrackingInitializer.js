import * as React from "react";
import { v4 as uuid } from "uuid";
import { useTracking } from "react-tracking";
import MixPanel from "../mock3rdParty/MixPanel";
import DDlog from "../mock3rdParty/DataDog";

const ReactTrackingInitializer = ({ children }) => {
  const { Track } = useTracking(
    {
      // this is where the initialize data put
      trackVersion: "1.0.0",
    },
    {
      dispatch: (trackedData) => {
        console.log("dispatchData", trackedData);
        const { eventName, ...restOfData } = trackedData.data;
        switch (trackedData.type) {
          case "product":
            const unique_id = uuid();
            MixPanel.track(eventName, unique_id, restOfData);
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
