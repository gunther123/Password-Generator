// Assignment code here

//Defining function to generate user's password

const generatePassword = function(){

  //Defining all possible characters for password and password length in object
  const passwordChars = {
    upperCase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase:"abcdefghijklmnopqrstuvwxyz",
    numerics:"1234567890",
    specialChar:"!'`~@#$%^&*()_+-][}{|><?;:=",
    passwordLimit: [8,128]
  }

  const SELECT_LENGTH_PROMPT = "Please choose your password length between 8-128 characters."
  const INVALID_LENGTH_PROMPT = "Please choose a valid length for your password."
  const UPPERCASE_CONFIRMATION_PROMPT= "Would you like Uppercase Characters in your password?\
    \nClick Ok to add Uppercase Characters to your password.\
    \nClick Cancel to not use Uppercase Characters in your password."
  const LOWERCASE_CONFIRMATION_PROMPT = "Would you like Lowercase Characters in your password?\
    \nClick Ok to add Lowercase Characters to your password.\
    \nClick Cancel to not use Lowercase Characters in your password."
  const NUMERIC_CONFIRMATION_PROMPT = "Would you like Numerical Characters in your password?\
    \nClick Ok to add Numerical Characters to your password.\
    \nClick Cancel to not use Numerical Characters in your password."
  const SPECIAL_CHAR_CONFIRMATION_PROMPT = "Would you like Special characters in your password?\
    \nClick Ok to add Special Characters to your password.\
    \nClick Cancel to not use Special Characters in your password."
  const NO_CHAR_TYPE_SELECTED_ERROR = "You need to pick at least 1 option to generate a password. Try again!"

  //Defining container for characters to be used in password
  let pwdAllowableChar = "";

  //Prompt user to choose password length
  let passwordLength = prompt(SELECT_LENGTH_PROMPT);
 
  //Turn passwordLength into integer instead of string
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  //Check if user selected an acceptable password length
  if (passwordLength < passwordChars.passwordLimit[0] || passwordLength > passwordChars.passwordLimit[1] || isNaN(passwordLength) === true){
    alert(INVALID_LENGTH_PROMPT);
    return generatePassword();
  }

  //Add uppercase characters to list of characters to be used
  if(confirm(UPPERCASE_CONFIRMATION_PROMPT)){
    pwdAllowableChar += passwordChars.upperCase;
    console.log(pwdAllowableChar);
  }

  //Add lowercase characters to list of characters to be used
  if(confirm(LOWERCASE_CONFIRMATION_PROMPT)){
    pwdAllowableChar += passwordChars.lowerCase;
    console.log(pwdAllowableChar);
  }
 
  //Add numerical characters to list of characters to be used
  if(confirm(NUMERIC_CONFIRMATION_PROMPT)){
   pwdAllowableChar += passwordChars.numerics;
   console.log(pwdAllowableChar);
   }
 
  //Add special characters to list of characters to be used
  if(confirm(SPECIAL_CHAR_CONFIRMATION_PROMPT)){
   pwdAllowableChar += passwordChars.specialChar;
   console.log(pwdAllowableChar);
   }

  //Check that at least one criteria was chosen
  if(pwdAllowableChar.length === 0){  // <== removing all those variables makes you find a new way to do this bit
    alert(NO_CHAR_TYPE_SELECTED_ERROR);
    return generatePassword();
  }
  //Defining user's password
  var userPassword = "";

  //Generate user's password
  for(i=0; i < passwordLength; i++){
    var charIndex = Math.floor(Math.random() * pwdAllowableChar.length);
    console.log(charIndex);
    userPassword += pwdAllowableChar[charIndex];  //  <== faster way to add something to a variable and keep original name
  }
  return userPassword;
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
