const simulateAsyncOperation = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeout < 1000) {
        reject("Timeout is too short. Operation failed.");
      } else {
        resolve("Operation completed successfully!");
      }
    }, timeout);
  });
};


const performAsyncTask = async (timeout) => {
  try {
    const result = await simulateAsyncOperation(timeout);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};

performAsyncTask(1500);
performAsyncTask(500);