# _Week 3 Friday Project: Beep-Boop Converter_

#### _Create a Web App that takes a number from user input and returns a list with predetermined messages._

#### By _**Robert Lee**_

## Description

_The expected behavior of the program is as follows:  The user inputs an integer, and the program output is a string that counts all the numbers from zero to the user's number.  A new string should be regenerated without having to hit the "Refresh" button on the web browser._

_The exceptions are:_

* _If any number contains the "0" character, the number is replaced with "Beep!"._

* _If any number contains the "1" character, the number is replaced with "Boop!"._

* _If a number is divisible by 3 (with no remainder), the number is replaced with "I'm sorry Dave.  I'm afraid I can't do that."_

## Specifications

_1.  Ask the user for a number input._
  * Check that the user number is a positive integer.
  * Consider an upper bounds for the user's number.

_2.  Create an array that is the size of (user's number)._
  * The number located at index zero is "0".
  * The number located at the last index is the user's number.

_3.  Begin a loop of each element in the array..._

_4.  If the element in the array contains any "0" character, the entire element is replaced with "Beep!"._  __This rule has the lowest priority.__
  * Example input: "20"
  * Example output: "Beep!"

_5.  If the element in the array contains any "1" character, the entire element is replaced with "Boop!"._  __This rule has the 2nd highest priority.__
  * Example input: "21"
  * Example output: "Boop!"

_6.  If the element cleanly divisible by three, it means the element's modulo is equal to zero when using 3.  If this is true, the element is replaced with the string:  "I'm sorry Dave, I'm afraid I can't do that."_  __This rule has the highest priority.__

  * Example input: 5.  (We note (5 % 3) is equal to 2.)
  * Example output: 5  (No change.)
  * Example input: 30.  (We note (30 % 3) is equal to 0.)
  * Example output: "I'm sorry Dave........"

_7.  Show the final output back to the user.  This must be done in such a way that does not require using the Web browser's "Refresh" button._

## Setup/Installation Requirements

* _Log in to GitHub_
* _Clone GitHub URL in terminal using git_
* _Open the html file in your Web Browser_

## Known Bugs/Issues

* _TO BE DETERMINED_

## Technologies Used
_GitHub, Git, HTML, CSS, Bootstrap, Javascript, JQuery_

### License
Copyright (c) 2018 **_RL_** MIT license.
