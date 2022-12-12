const generateMessages = (nameList) => {
  return nameList.map(
    (name) => `Hi ${name}! 50% off our best candies for you today!`
    // (name) => "Hi " + name + "! 50% off our best candies for you today!"
  );
};

// const generateMessages = (names) => {
//   return names.map((name) => {
//     return "Hi " + name + "! 50% off our best candies for you today!";
//   });
// };

// module.exports = generateMessages;

const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

console.log(generateMessages(names));
