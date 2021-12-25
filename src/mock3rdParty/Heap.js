import { v4 as uuid } from "uuid";
const Heap = {
  track: (eventName, additionalData) => {
    const unique_id = uuid();
    console.info(
      eventName,
      JSON.stringify(
        {
          reference_id: unique_id,
          ...additionalData,
        },
        null,
        4
      )
    );
  },
};

export default Heap;
