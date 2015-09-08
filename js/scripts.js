var factorialFactory = function(number) {
  var total = 1;
  while (number > 0) {
    total = total * number;
    console.log(number)
    number -= 1;
  };
  return total;
};



// var factorialFactory = function(number) {
//
//     if (number > 0) {
//       factorialFactory(number - 1);
//     }
//
//     var total = total * number;
//
//     return total;
// };
