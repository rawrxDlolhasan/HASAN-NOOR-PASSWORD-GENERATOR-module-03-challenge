// I add components of the generated-password(s).

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// I introduce confirmation pop-ups regarding compenents the user wants to incorporate in their generated-password(s).

var confirmLength = "";
var confirmSpecialCharacters;
var confirmNumbers;
var confirmLowercaseLetters;
var confirmUppercaseLetters;

// I add a pop-up asking the user how many characters they'd like their generated-password(s) to be.

function generatePassword () {
  var confirmLength = (prompt("Enter how many characters you'd like your generated-password to be."));

  // I add restrictions regarding the length of the generated-password.

  while(confirmLength <= 7 || confirmLength >= 129) {
    
    // I add a pop-up asking the user to reenter how many characters they'd like their generated-password(s) to be if a restricted-amount is inputted.

    alert("The length of the generated-password MUST be between 08 characters and 129 characters. Please enter another amount.");
    var confirmLength = (prompt("Enter how many characters you'd like your generated-password to be."));
  }

  // I add a pop-up reasking the user how many characters they'd like their generated-password to be.
  
  alert(`Your generated-password will contain ${confirmLength} characters.`);

  // I add confirmation pop-ups regarding components the user wants to incorporate in their generated-password(s).

  var confirmSpecialCharacters = confirm("Click OK if you want to incorporate special-characters in your generated-password.");
  var confirmNumbers = confirm("Click OK if you want to incorporate numbers in your generated-password. ");
  var confirmLowercaseLetters = confirm("Click OK if you want to incorporate lowercase-letters in your generated-password.");
  var confirmUppercaseLetters = confirm("Click OK if you want to incorporate uppercase-letters in your generated-password.");

  // I readd confirmation pop-ups regarding components the user wants to incorporate in their generated-password(s) if an attempt to ignore the pop-up is made.

  while(confirmSpecialCharacters === false && confirmNumbers === false && confirmLowercaseLetters === false && confirmUppercaseLetters === false) {
    alert("You CANNOT ignore this pop-up. You MUST choose an option.");
    var confirmSpecialCharacters = confirm("Click OK if you want to incorporate special-characters in your generated-password.");
    var confirmNumbers = confirm("Click OK if you want to incorporate numbers in your generated-password. ");
    var confirmLowercaseLetters = confirm("Click OK if you want to incorporate lowercase-letters in your generated-password.");
    var confirmUppercaseLetters = confirm("Click OK if you want to incorporate uppercase-letters in your generated-password.");
  }

  // I link the components of the generated-password(s) to the confirmation pop-ups for the generated-password(s).

  var passwordCharacters = []

  if (confirmSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }

  if (confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  if (confirmLowercaseLetters) {
    passwordCharacters = passwordCharacters.concat(lowercaseLetters)
  }

  if (confirmUppercaseLetters) {
    passwordCharacters = passwordCharacters.concat(uppercaseLetters)
  }

  console.log(passwordCharacters)

  // I instruct the webpage to generate the components of the generated-password(s) randomly.

  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// PROVIDED-CODE

var generateBtn = document.querySelector("#generate");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



generateBtn.addEventListener("click", writePassword);
