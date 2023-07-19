// Assignment Code
var generateBtn = document.querySelector("#generate"); //Button to generate password

// Write password to the #password input
function writePassword() {  //Thought process: Second step: Prompts after "click", users options to anonymous password
  var password = generatePassword(); //Function cannot be found on starter code. Task: make a generatePassword function
  var passwordText = document.querySelector("#password"); //inspect #password, this will be value of password or new password to show here

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //Thought process: First step: "event" is click to generate password

//create my arrays of input:
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','x', 'y', 'z'];
const symbols = ['~', '!', '@', '#', '$', '%', '*', '^', '&', '/', '+', '?', '_', '-', '<']; 
const numbers = [0,1,2,3,4,5,6,7,8,9];