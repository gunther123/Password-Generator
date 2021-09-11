// Assignment code here

//Defining function to generate user's password

var generatePassword = function(){

  //Defining all possible characters for password
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numerics = "1234567890";
  var specialChar = "!'`~@#$%^&*()_+-][}{|><?;:=";

  //Defining Password minimum and maximum password size limit
  var passwordLimit = [8,128];

  //Prompt user to choose password length
  var passwordLength = prompt("Please choose your password length between 8-128 characters.")

  //Turn passwordLength into integer instead of string
  parseInt(passwordLength);

  if (passwordLength < passwordLimit[0] | passwordLimit > passwordLimit[1] ){
    alert("Please choose a valid length for your password.")
    return generatePassword();
  }





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
