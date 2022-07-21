
// Assignment code here

// Randomize password properties
var generateBtn = document.querySelector("#generate");

function randomInt(min,max){
  if(!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random*max)
}

function getRandomDigit(list) {
  return list[randomInt(0,list.length)]
}

//Function to Generate Password
function generatePassword() {
  var input1 = window.prompt("How long would you like your password to be?");
  var passwordLength = parseInt(input1)

  if (isNaN(passwordLength)){
    window.alert("Your input is not a number,please try again.")
    return
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password does not fit criteria. Must be between 8 and 128 characters. Please try again.")
  return
  }

  var choseNumbers = window.confirm("Do you want your password to include numbers?")
  var choseSymbols = window.confirm("Do you want your password to include symbols?")
  var choseLCase = window.confirm("Do you want your password to include lower case letter?")
  var choseUCase = window.confirm("Do you want your password to include upper case letter?")

    
  var lowercase = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbols = ["!", "+", "&", "^", "%", "?", "@","#","$"]
  
  var passwordbox = []

  if (choseNumbers === true) {
    passwordbox.push(numbers)
  }
  if (choseSymbols === true) {
    passwordbox.push(symbols)
  }
  if (choseLCase === true) {
    passwordbox.push(lowercase)
  }
  if (choseUCase === true) {
    passwordbox.push(uppercase)
  }


  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomChoice = getRandomDigit(passwordbox)
    var randDigit = getRandomDigit(randomChoice)
    generatedPassword +=randDigit
  }

  return generatedPassword
  
} //End of Function
// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);