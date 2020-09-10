var generateBtn = document.querySelector("#generate");
function generatePassword() {
var testAlert = prompt("enter number of characters")
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