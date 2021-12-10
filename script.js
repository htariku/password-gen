// Assignment code here
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*()_+=-";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// prompts for password criteria; length criteria
// length at least 8 charecters and no more than 128 charecters
// charecter types and confirm lowercase, uppercase, numeric, an special charecters

function generatePassword() {
  var password = ""
  var characters = ""

  var pwdLength = prompt(
    "Between 8 and 128 how many characters would you like your password to contain?"
  );
  while (pwdLength < 8 || pwdLength > 128) {
    alert("Password length must be a number between 8 and 128");
    pwdLength = prompt(
      "Between 8 and 128 how many characters would you like your password to contain?"
    );
  }
  var wantsUpper = confirm("Would you like uppercase letters?");
  var wantsLower = confirm("Would you like lowercase letters?");
  var wantsNumbers = confirm("Would you like numbers?");
  var wantsSpecial = confirm("Would you like special characters?");

  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert("You must choose at least one character type.");
    wantsUpper = confirm("Would you like uppercase letters?");
    wantsLower = confirm("Would you like lowercase letters?");
    wantsNumbers = confirm("Would you like numbers?");
    wantsSpecial = confirm("Would you like special characters?");
  }

  if(wantsUpper) {
    characters += upper
  }
  if(wantsLower) {
    characters += lower
  }
  if(wantsNumbers) {
      characters += numbers
  }
  if(wantsSpecial) {
      characters += special
  }

  for (var i = 0; i < pwdLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// input validated and at least one charecter type should be selected

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
