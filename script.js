
//Create var library
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericNumbers = "0123456789"
var specialCharacters = "!~`!@#$%^&*()-_+={}[]|\;:./?,"
var characterPool = ""
var password = ""
//Write password function
function writePassword() {
  //Write password length pompt to set variable
  var passwordLength = prompt ("How long would you like your password to be? (Between 8-128 characters"); 

  if (passwordLength < 8 || passwordLength > 128) {
    console.log ("Invalid password length");
    alert("Password does not meet requirements")
    return 
  }
//Write password variables to include via homework requirements
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
 
var useSpecialCharacters = confirm ("Would you like to use special characters?")
 console.log (specialCharacters)

 if (useSpecialCharacters === true){
  characterPool = characterPool + specialCharacters
 }
//Write if/return statement
if (!useSpecialCharacters&& !useNumeric && !useUppercase && !useLowercase) {
  alert ("You must choose at least one option")
  return
}
//Write for loop using math.floor/math.random methods
for (var i = 0; i < passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * (characterPool.length - 0) + 0);

//Write var password random selection 
 password = characterPool.charAt(randomNumber) + password
 console.log (password)
}
  
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


