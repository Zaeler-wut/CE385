const fetchDataFromServer1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from Server 1");
    }, 2000);
  });
};

const fetchDataFromServer2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error from Server 2");
    }, 1000);
  });
};

const fetchDataFromServer3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from Server 3");
    }, 3000);
  });
};

Promise.any([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3()
])
  .then((result) => {
    console.log("First successful result:", result);
  })
  .catch((error) => {
    console.log("All servers failed:", error);
  });

  Promise.allSettled([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3()
])
  .then((results) => {
    console.log("All server results:", results);
  });
