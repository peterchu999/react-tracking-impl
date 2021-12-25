const MixPanel = {
  track: (eventName, reference_id, additionalData) => {
    console.info(
      `${eventName} ${reference_id}`,
      JSON.stringify(
        {
          reference_id,
          ...additionalData,
        },
        null,
        4
      )
    );
  },
};

export default MixPanel;
