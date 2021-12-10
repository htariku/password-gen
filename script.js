
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// prompts for password criteria; length criteria 
// length at least 8 charecters and no more than 128 charecters 
// charecter types and confirm lowercase, uppercase, numeric, an special charecters 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// input validated and at least one charecter type should be selected 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);