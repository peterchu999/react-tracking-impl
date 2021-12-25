const DDlog = {
  error: (eventName, additionalData) => {
    console.error(eventName, JSON.stringify(additionalData, null, 4));
  },
};

export default DDlog;
