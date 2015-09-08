var factorialFactory = function(number) {
  var total = 1;
  while (number > 0) {
    total = total * number;
    console.log(number)
    number -= 1;
  };
  return total;
};

$(document).ready(function() {
  $("form#factorial-factory").submit(function(event) {
    var factorial = parseInt($("input#factorial").val());
    var output = factorialFactory(factorial);

    $(".factorial").text(factorial);
    $(".output").text(output);

    $("#output").show();
    event.preventDefault();
  });
});
