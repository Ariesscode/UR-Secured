// Assignment Code
var generateBtn = document.querySelector("#generate"); //Button to generate password

// Write password to the #password input
function writePassword() {  //Thought process: Second step: Prompts after "click", users options to anonymous password
  var password = generatePassword(); //Function cannot be found on starter code. Task: make a generatePassword function
  var passwordText = document.querySelector("#password"); //inspect #password, this will be value of password or new password to show here

  passwordText.value = password; //passowrd length 8  to 128 chararacters

}

//create my arrays of user input:
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','x', 'y', 'z'];
const symbols = ['~', '!', '@', '#', '$', '%', '*', '^', '&', '/', '+', '?', '_', '-', '<']; 
const numbers = [0,1,2,3,4,5,6,7,8,9];
const userPick = []; //user pick preference of password characters = userpick
const passwordLength = 8; // setting a default length of 8 because password criterial is between 8 and 128

generateBtn.addEventListener("click", writePassword); //Thought process: First step: "event" is click to generate password

   function generatePassword() {
    window.alert(" Hello User! Please configure your secured password here, follow the prompts!"); //when user clicks button, Prompts appear in window
   
    //First prompt: User enter length of password between 8-128
    const passwordLength= parseInt(window.prompt("Password must be 8-128 characters in length, please enter the length of your choice: ")); //If user inputs a number as a string it will "parseInt" the string to a number
    console.log(passwordLength, typeof passwordLength) //This will give me information of input such as string, boolean, or number
    if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { //All false input will alert message of password criteria 
      window.alert("Invalid password! Please try again. Note: Enter password as a number. Your secured password can only be 8-128 characters in length." );
      return;
    }
    //Second prompt: confirm message needs to be true to add or push random number to be saved to user password array
    const numeric = confirm("Would you like to add a numeric character to password?")
    console.log(numeric) 
    if (numeric) { 
      userPick.push(numbers[Math.floor(Math.random() * numbers.length)])
    }
    console.log(userPick)//here it shows which random number was picked

    //Third prompt: Repeat second step, but switch variables to corresponding character for password:

    const upperCase = confirm("Would you like to add a UpperCase letter?")
    console.log(upperCase)
    if (upperCase) {
      userPick.push(upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]) //random letter chosen if user decides they would like uppercase 
    } 
    console.log(userPick)

    //Fourth prompt:Repeat 1st and second step
    const lowerCase = confirm("Would you like to add a lowercase letter?")
    console.log(lowerCase) 
      if (lowerCase) {
        userPick.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)])
      }
      console.log(userPick)

      //Fifth prompt: Repeat steps before this step
      const specialSymbols = confirm("Would you like to add a special symbol?")
      console.log(specialSymbols) 
        if (specialSymbols) {
          userPick.push(symbols[Math.floor(Math.random() * symbols.length)])
        }
        console.log(userPick)
    





   
  }


 






