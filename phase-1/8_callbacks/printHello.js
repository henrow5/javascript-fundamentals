const printHello = () => {
  console.log("Hello there!");
};

// setTimeout(printHello, 3000);

const executeAfterDelay = (seconds, callbackFunction) => {
  setTimeout(callbackFunction, seconds * 1000);
};

executeAfterDelay(5, printHello);
