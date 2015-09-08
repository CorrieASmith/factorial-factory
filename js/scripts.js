var factorialFactory = function(number) {
  var total = 1;
  while (number > 0) {
    total = total * number;
    console.log(number)
    number -= 1;
  };
  return total;
};
