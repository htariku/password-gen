
var generateBtn = document.querySelector("#generate");




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
  var passLength = prompt("Please enter how many charecters you would like your password to be")
  var lengthConfirm = parseInt(passLength);
  console.log(lengthConfirm);
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert ("Error. Xhoice is not valid. Please try again.");
    return;
  }

var collectionOfValids = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "*&^%$#@!?><{}" .split("");



var lowerCaseConfirm = confirm("Do you want your password to include lowercase letters?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            collectionOfValids.push(lowerCaseChar[i]);
        }
    }

var upperCaseConfirm = confirm("Do you want your password to include uppercase letters?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            collectionOfValids.push(upperCaseChar[i]);
        }
    }

var numberConfirm = confirm("Do you want your password to include numbers");
    if (numberConfirm === true) {
        for (var i = 0; i < numberChar.length; i++) {
            collectionOfValids.push(numberChar[i]);
        }
    }
  
var specialConfirm = confirm("Do you want your password to include special characters?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            collectionOfValids.push(specialChar[i]);
        }
    }

 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
     collectionOfValids[
         Math.floor(Math.random() * collectionOfValids.length)];
     randomPassword +=
        collectionOfValids[
            Math.floor(Math.random() * collectionOfValids.length)
        ];
    }
 return randomPassword;

  }
  generateBtn.addEventListener("click", writePassword);



