const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

const transform = (message, transformFunction) => {
  return transformFunction(message);
};

string = transform("WHY ARE YOU SHOUTING?", lowercaseMessage);
console.log(string);
