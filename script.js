// Assignment code here
var generatePassword = function() {
  var passList = [];
  for (var i = 0; i <= passLen; i++){
    passList.push(" ");   
  }

  var pickNum = function () {
    if (addNum) {
      passList[i] = Math.floor(Math.random() * 10) + 1;
    }
  }

  var pickSpecChar = function () {
    if (addSpecChar) {
      passList[i] = specChar[(Math.floor(Math.random()* 10) + 1)];
    }
  }

  var pickLetter = function () {
    var rando = Math.floor(Math.random() * 10) + 50;
    if (rando % 2 === 0 && passLower) {
      passList[i] = letters[(Math.floor(Math.random()* 10) + 1)];
    }
    else if (passUpper){
      passList[i] = letters[(Math.floor(Math.random()* 10) + 1)].toUpperCase();
    }
  }

  var letters = ['A','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '?', ';'];

  var passLen = window.prompt("How long do you want your password? 8-128 characters.");

  if (passLen >= 8 && passLen <=128){

    var addSpecChar = window.confirm("Do you want special characters in your password? EX: !@#$%");

    var passUpper = window.confirm("Do you want your password to contain uppercase letters?");

    var passLower = window.confirm("Do you want your password to contain lowercase lettes?");

    var addNum = window.confirm("Do you want your password to contain numbers?");

    
    for (i = 0; i <= passLen; i++){
      var listPull = Math.floor(Math.random() * 10);
      if (listPull <= 3){
        pickNum();
      }
      else if (listPull >= 3 && listPull <= 6) {
        pickLetter();
      }
      else {
        pickSpecChar();
      }
    }

    return passList.join("");

  }
  else if (typeof passLen === "string"){
    window.alert("Invalid response. Please pick a number between 8-128");
    return "Try again!";
  }
  else {
    window.alert("Please pick a password length between 8-128");
    return "Try again!";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
