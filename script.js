var generateBtn = document.querySelector("#generate");
function generatePassword() {
  
  var testAlert = prompt("enter number of characters");
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

  var passwordLength = prompt("Choose a password length between 8 and 129 characters");
  if (passwordLength <= 7) {
    alert("Password length must be greater than 7 characters")
  }
  else if (passwordLength >=130) {
    alert("Password length must be less than 130 characters")
  }
  else {
    passwordSpecial = confirm("Would you like special characters?");
    passwordUpper = confirm("Would you like Uppercase characters?");
    passwordLower = confirm("Would you like Lowercase characters?");
    passwordNum = confirm("Would you like Number characters?")
  }
  var pwCharacters = 
  // put majority of code here
  // ask for special characters
  // ask for uppercase characters
  // ask for lowercase characters
  // ask for numbers
  return testAlert
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);