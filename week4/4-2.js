const fetchDataWithCallback = (callback) => {
  console.log("Starting async operation (Callback)");
  setTimeout(() => {
    const data = {
      id: 1,
      name: "Wutthipong",
      email: "wutthipong@example.com"
    };
    callback(null, data);
  }, 2000);
};

const fetchDataWithPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      const data = {
        id: 1,
        name: "Wutthipong",
        email: "wutthipong@example.com"
      };

      const success = true;

      if (success) {
        resolve(data);
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
};


//เรียกใช้แบบ callback
fetchDataWithCallback((error, result) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Callback result:", result);
  }
});

console.log("Asynchronous operation started (Callback)");

//เรียกใช้แบบ Promise
fetchDataWithPromise()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
