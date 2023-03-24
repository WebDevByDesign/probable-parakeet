// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericNumbers = "0123456789"
var specialCharacters = "!~`!@#$%^&*()-_+={}[]|\;:./?,"
var characterPool = ""
// Write password to the #password input
function writePassword() {
  var passwordLength = prompt ("How long would you like your password to be? (Between 8-128 characters"); 

  
  if (passwordLength < 8 || passwordLength > 128) {
    console.log ("Invalid password length");
    alert("Password does not meet requirements")
    return 
  }

  var useLowercase = confirm ("Would you like to include lowercase letters?")
  console.log (useLowercase)

  if (useLowercase === true) {
   characterPool = characterPool + lowercaseLetters
  }

  var useUppercase = confirm ("Would you like to include uppercase letters?")
  console.log (useUppercase)

  if (useUppercase === true) {
    characterPool = characterPool + uppercaseLetters
  }

var useNumeric = confirm ("Would you like to use numeric numbers?")
console.log (useNumeric)

if (useNumeric === true){
  characterPool = characterPool + numericNumbers
}
 
var useSpecialCharacters = confirm ("You must use one special character.")
 console.log (specialCharacters)

 if (useSpecialCharacters === true){
  characterPool = characterPool + specialCharacters
 }



  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
 
// Math.random () and Math.floor methods?

// document.getElementById("password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//display password via an alert
