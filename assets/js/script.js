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

  //Defining container for characters to be used in password
  var pwdAllowableChar = "";

  //Prompt user to choose password length
  var passwordLength = prompt("Please choose your password length between 8-128 characters.");

  if(passwordLength === "" || passwordLength === null){
    alert("Please choose a valid length for your password.");
    return generatePassword();
  }
 
  //Turn passwordLength into integer instead of string
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  //Check if user selected an acceptable password length
  if (passwordLength < passwordLimit[0] || passwordLength > passwordLimit[1]){
    alert("Please choose a valid length for your password.");
    return generatePassword();
  }

  //Prompt user to choose to use uppercase characters or not
  var useUpperCase = confirm("Would you like Uppercase Characters in your password?\
  \nClick Ok to add Uppercase Characters to your password.\
  \nClick Cancel to not use Uppercase Characters in your password.");

  //Add uppercase characters to list of characters to be used
  if(useUpperCase === true){
    pwdAllowableChar = pwdAllowableChar + passwordChars.upperCase;
    console.log(pwdAllowableChar);
  }

  //Prompt user to choose to use lowercase characters or not
  var useLowerCase = confirm("Would you like Lowercase Characters in your password?\
  \nClick Ok to add Lowercase Characters to your password.\
  \nClick Cancel to not use Lowercase Characters in your password.");

  //Add lowercase characters to list of characters to be used
  if(useLowerCase === true){
    pwdAllowableChar = pwdAllowableChar + passwordChars.lowerCase;
    console.log(pwdAllowableChar);
  }

  //Prompt user to choose to use numerical characters or not
  var useNumeric = confirm("Would you like Numerical Characters in your password?\
  \nClick Ok to add Numerical Characters to your password.\
  \nClick Cancel to not use Numerical Characters in your password.");
 
  //Add numerical characters to list of characters to be used
  if(useNumeric === true){
   pwdAllowableChar = pwdAllowableChar + passwordChars.numerics;
   console.log(pwdAllowableChar);
   }
  
  //Prompt user to choose to use special characters or not
  var useSpecial = confirm("Would you like Special characters in your password?\
  \nClick Ok to add Special Characters to your password.\
  \nClick Cancel to not use Special Characters in your password.");
 
  //Add special characters to list of characters to be used
  if(useSpecial === true){
   pwdAllowableChar = pwdAllowableChar + passwordChars.specialChar;
   console.log(pwdAllowableChar);
   }

  //Check that at least one criteria was chosen
  if(useUpperCase === false && useLowerCase === false && useNumeric === false && useSpecial === false){
    alert("You need to pick at least 1 option to generate a password. Try again!");
    return generatePassword();
  }
  //Defining user's password
  var userPassword = "";

  //Generate user's password
  for(i=0; i < passwordLength; i++){
    var charIndex = Math.floor(Math.random() * pwdAllowableChar.length);
    console.log(charIndex);
    userPassword = userPassword + pwdAllowableChar[charIndex];
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
