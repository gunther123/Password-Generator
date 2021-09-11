// Assignment code here

//Defining function to generate user's password

var generatePassword = function(){

  //Defining all possible characters for password
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numerics = "1234567890";
  var specialChar = "!'`~@#$%^&*()_+-][}{|><?;:=";

  var passwordLength = prompt("Please choose your password length between 8-128 characters.")

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
