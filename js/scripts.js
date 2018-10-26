$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userNumberInput = $("input#userInput").val();
    console.log(userNumberInput);
    debugger;
    $("span.userOutput").text(userNumberInput);


  }); /*This is the end brace for HTML button event monitoring*/
}); /*This is the end brace for document ready*/
