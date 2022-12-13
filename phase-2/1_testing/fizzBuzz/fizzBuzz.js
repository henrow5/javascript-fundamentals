// const fizzBuzz = (number) => {
//   if (number % 15 === 0) {
//     return "FizzBuzz";
//   } else if (number % 3 === 0) {
//     return "Fizz";
//   } else if (number % 5 === 0) {
//     return "Buzz";
//   } else {
//     return number;
//   }
// };

const fizzBuzz = (number) => {
  if (number % 15 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
};

module.exports = fizzBuzz;
