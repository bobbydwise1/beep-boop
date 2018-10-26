function checkNumberIfPositiveInteger(number) {
  if ((number < 0) && (number % 1 === 0) && (number < 100)) {
    return 1;
  } else {
    return 0;
  }
}

function makeNewArrayZeroToUserInput(positiveInteger) {
  var finalSize = parseInt(positiveInteger);
  console.log(finalSize);
  var newArray = [];
  for (var index = 0; index <= finalSize; index ++) {
    console.log("Index: " + index);
    newArray.push(index);
  }
  console.log(newArray);
  return newArray;
}

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userNumberInput = $("input#userInput").val();
    // console.log(userNumberInput);
    if (checkNumberIfPositiveInteger(userNumberInput) === 1) {
      makeNewArrayZeroToUserInput(userNumberInput);

} else {$("span.userOutput").text("I'm sorry, your number is invalid.");}


//    $("span.userOutput").text(userNumberInput);


  }); /*This is the end brace for HTML button event monitoring*/
}); /*This is the end brace for document ready*/
