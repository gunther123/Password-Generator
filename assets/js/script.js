// Assignment code here

//Defining function to generate user's password

var generatePassword = function(){

  //Defining all possible characters for password
  var passwordChars = {
    upperCase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase:"abcdefghijklmnopqrstuvwxyz",
    numerics:"1234567890",
    specialChar:"!'`~@#$%^&*()_+-][}{|><?;:=",
  }

  //Defining Password minimum and maximum password size limit
  var passwordLimit = [8,128];

  //Prompt user to choose password length
  var passwordLength = prompt("Please choose your password length between 8-128 characters.");

  //Defining container for characters to be used in password
  var passwordContainer = "";
 
  //Turn passwordLength into integer instead of string
  parseInt(passwordLength);

  //Check if user selected an acceptable password length
  if (passwordLength < passwordLimit[0] | passwordLength > passwordLimit[1] ){
    alert("Please choose a valid length for your password.")
    return generatePassword();
  }

  //Prompt user to choose to use uppercase characters or not
  var useUpperCase = confirm("Would you like uppercase characters in your password?\
  \nClick Ok to add uppercase characters to your password.\
  \nClick Cancel to not use uppercase characters in your password.")

  //Add uppercase characters to list of characters to be used
  if(useUpperCase === true){
    passwordContainer = passwordContainer + passwordChars.upperCase;
    console.log(passwordContainer);
  }
  //Prompt user to choose to use lowercase characters or not
  var useLowerCase = confirm("Would you like lowercase characters in your password?\
  \nClick Ok to add lowercase characters to your password.\
  \nClick Cancel to not use lowercase characters in your password.")

  //Add lowercase characters to list of characters to be used
  if(useLowerCase === true){
    passwordContainer = passwordContainer + passwordChars.lowerCase;
    console.log(passwordContainer);
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
