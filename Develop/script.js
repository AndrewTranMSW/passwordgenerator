// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

//prompt for the criteria
//var confirmUppercase = confirm uppercase
//confirm whether or not to include lowercase, uppercase, numeric and/or special characters
//confirm lowercase
//confirm uppercase
//confirm numbers
//confirm special characters

var alphabetLower = ["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~","`","!","@","#","$","%","^","&","*","(",")"," ","\'", "\"","-","+","=","_","\\","]","[","<",">","?","{","}","|", ":",";", ","];

var totalArr = [["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], [0, 1, 2, 3, 4, 5, 6, 7, 9, 9], ["~","`","!","@","#","$","%","^","&","*","(",")"," ","\'", "\"","-","+","=","_","\\","]","[","<",">","?","{","}","|", ":",";", ","]];

var low = false;
var up = false;
var num = false;
var spec = false;

function generatePassword() {
  let password ="";
  let length = prompt("Please enter a password length between 8-128.");

    if(isNaN(length) === false) {
      // conditional to alert the user if the size isn't between 8 or 128
      if(length < 8 || length > 128) {
        alert("Please choose a length BETWEEN 8 and 128.")
        generatePassword();
      } else {
        var newTotalArr = chooseChar();
    
        for(let i = 0; i <= length; i++) {
          let x = Math.floor(Math.random() * newTotalArr.length);
          password = password + newTotalArr[x];
        }
      }
    } else {
      alert("Please choose a integer value. Not a string.")
      generatePassword();
    }
    return password;
  }

  function chooseChar() {
    let newTotalArr = [];
    low = confirm("Would you like lowercase characters?");
    up = confirm("Would you like uppercase characters?");
    num = confirm("Would you like numbers?");
    spec = confirm("Would you like special characters?");
    if(up == false && low == false && spec == false && num == false) {
      alert("Please select at least one type")
      chooseChar();
    } else {
      let boolArr = [low, up, num, spec];
      for (let k = 0; k <= boolArr.length; k++) {
        if(boolArr[k]) {
          newTotalArr = newTotalArr.concat(totalArr[k]);
          console.log(newTotalArr);
        }
      }
    }
    return newTotalArr;
  }
  //handle validation LAST
  //validate that I chose at least 1 character
    //if not at least 1, start over
    //handling recursion might get wonky -- may not be able to just call generate again
    //maybe just alert you didn't choose anything

 

  //add chosen character types to options array
  // if confirm {characterType} then concatenate the {characterType array} onto the options array
    //conditional for each {characterType}

  //declare passwordArray

//generate password from chosen characters
  //for loop will need to run as many times as the 'user' selected for the password length (8-128)
    //generate a random index
    //use random index to select a character from options array
    //push random character into passwordArray

//declare passwordString = passwordArray join
//return passwordString



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page