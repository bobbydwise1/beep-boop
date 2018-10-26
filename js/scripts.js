function checkNumberIfPositiveInteger(number) {
  if ((number > 0) && (number % 1 === 0) && (number < 3001)) { /*An reasonable upper bound has been added*/
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
function applyRulesToSerialNumberArray(arrayOfSerialIntegers) { /*This is the main bussiness function*/
    var regex0 = RegExp("0");
    var regex1 = RegExp("1");
  arrayOfSerialIntegers.forEach(function(element) {
    if (element % 3 === 0 && element != 0) {
      arrayOfSerialIntegers[element] = "I'm sorry Dave.  I'm afraid I can't do that."; /*Note this condition has the highest prioirity*/
    } else if (regex1.test(element) === true) {
      arrayOfSerialIntegers[element] = "Boop!";
    } else if (regex0.test(element) === true) {
      arrayOfSerialIntegers[element] = "Beep!"; /*Note this condition has the lowest prioirty*/
    } else {
//      console.log("Number does not change");
    }
  });
  return arrayOfSerialIntegers;
}

$(document).ready(function() { /*This is the start brace for document ready*/
  $("form#inputForm").submit(function(event) { /*This is the start for HTML button event monitoring*/
    event.preventDefault();
    var userNumberInput = $("input#userInput").val();
    $("span.userOutput").empty(); /*Delete the previous results*/
    $("div#result").show();
    if (checkNumberIfPositiveInteger(userNumberInput) === 1) {
      var userArray = makeNewArrayZeroToUserInput(userNumberInput);
      var outputArray = applyRulesToSerialNumberArray(userArray); /*This is the conversion function*/
      outputArray.forEach(function(element) {
        $("span.userOutput").append("<li>" + element + "</li>");
      }); /*This is the output logic.  It will create a list as an output.*/
    } else {
      $("span.userOutput").text("I'm sorry, your number is invalid.");
    }
    $("#ToggleButton").button(function(event) {
      
    })
  }); /*This is the end brace for HTML button event monitoring*/
}); /*This is the end brace for document ready*/
