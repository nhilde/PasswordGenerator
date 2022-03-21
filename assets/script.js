// Assignment Code
var generateBtn = document.querySelector("#generate");




generateBtn.onclick = function generatePassword() {

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const specialChar = ["!", "@", "#", "$", "%", "&", "*", "?"];


  var length = prompt("How many characters?")
  if (length < 8 || length > 128) {
    alert("Password needs between 8 and 128 characters")
    return;
  }

  var hasNumbers = prompt("Include numbers?")
  if (hasNumbers.includes("yes", "Yes", "YES", "y", "Y")) {
    hasNumbers = true
  } else {
    hasNumbers = false
  }


  var hasUppers = prompt("Include uppercase letters?")
  if (hasUppers.includes("yes", "Yes", "YES", "y", "Y")) {
    hasUppers = true
  } else {
    hasUppers = false;
  }

  var hasLowers = prompt("Include lowercase letters?")
  if (hasLowers.includes("yes", "Yes", "YES", "y", "Y")) {
    hasLowers = true
  } else {
    hasLowers = false;
  }

  var hasSpecial = prompt("Include special characters?")
  if (hasSpecial.includes("yes", "Yes", "YES", "y", "Y")) {
    hasSpecial = true
  } else {
    hasSpecial = false;
  }

  const choicePool = [
    ...(hasNumbers ? numbers : []),
    ...(hasUppers ? upperChar : []),
    ...(hasLowers ? lowerChar : []),
    ...(hasSpecial ? specialChar : [])
  ];

  console.log(hasNumbers, hasUppers, hasLowers, hasSpecial)
  let password = "";
  if (choicePool === 0) {
    alert("Need at least one parameter");
    return;
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * choicePool.length);
    password += choicePool[randomIndex];
  }
  console.log(password);

  alert("Your password is " + password)
  return;

}

