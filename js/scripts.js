function checkNumberIfPositiveInteger(number) {
  if ((number > 0) && (number % 1 === 0) && (number < 100)) {
    return 1;
  } else {
    return 0;
  }
}
function makeNewArrayZeroToUserInput(positiveInteger) {
  var finalSize = parseInt(positiveInteger);
  var newArray = [];
  for (var index = 0; index <= finalSize; index ++) {
    newArray.push(index);
  }
  return newArray;
}
function applyRulesToSerialNumberArray(arrayOfSerialIntegers) {
    var regex0 = RegExp("0");
    var regex1 = RegExp("1");
  arrayOfSerialIntegers.forEach(function(element) {
    //  console.log(element);
    if (element % 3 === 0 && element != 0) {
      arrayOfSerialIntegers[element] = "I'm sorry Dave.  I'm afraid I can't do that.";
    } else if (regex1.test(element) === true) {
      arrayOfSerialIntegers[element] = "Boop!";
    } else if (regex0.test(element) === true) {
      arrayOfSerialIntegers[element] = "Beep!";
    } else {
      console.log("Number does not change");
    }
  });
  return arrayOfSerialIntegers;
}

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userNumberInput = $("input#userInput").val();
    // console.log(userNumberInput);
    if (checkNumberIfPositiveInteger(userNumberInput) === 1) {
      var userArray = makeNewArrayZeroToUserInput(userNumberInput);
      console.log("This is the input: " + userArray);
      var outputArray = applyRulesToSerialNumberArray(userArray);
      console.log("This is the output: " + outputArray);
      $("span.userOutput").text(outputArray);
    } else {
      $("span.userOutput").text("I'm sorry, your number is invalid.");
    }


//    $("span.userOutput").text(userNumberInput);


  }); /*This is the end brace for HTML button event monitoring*/
}); /*This is the end brace for document ready*/
