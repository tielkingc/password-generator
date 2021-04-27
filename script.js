// Assignment code here

var generatePassword = function() {

  var pickNum = function () {
    if (addNum) {
      passList[x] = Math.floor(Math.random() * 10);
      console.log("num");
    }
  }

  var pickSpecChar = function () {
    if (addSpecChar) {
      passList[x] = specChar[(Math.floor(Math.random()* 10))];
      console.log("Char")
    }
  }

  var pickLetter = function () {
    var rando = Math.floor(Math.random() * 10) + 50;
    if (rando % 2 === 0 && passLower) {
      passList[x] = letters[(Math.floor(Math.random()* 10) + 1)];
      console.log("low")
    }
    else if (passUpper){
      passList[x] = letters[(Math.floor(Math.random()* 10) + 1)].toUpperCase();
      console.log("up")
    }
  }

  var letters = ['A','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var specChar = ['_', '#', '$', '%', '^', '&', '*', '?', ';', '+'];

  var passLen = window.prompt("How long do you want your password? 8-128 characters.");

  var passList = [];
  for (var i = 0; i < passLen; i++){
    passList.push("fail");   
  }
  console.log(passList)

  if (passLen >= 8 && passLen < 129){

    var addSpecChar = window.confirm("Do you want special characters in your password? EX: !@#$%");

    var passUpper = window.confirm("Do you want your password to contain uppercase letters?");

    var passLower = window.confirm("Do you want your password to contain lowercase lettes?");

    var addNum = window.confirm("Do you want your password to contain numbers?");

    
    for (var x = 0; x < passLen; x++){
      var listPull = Math.floor(Math.random() * 10) + 1;
      if (listPull <= 3){
        pickNum();
      }
      else if (listPull >= 4 && listPull <= 6) {
        pickLetter();
      }
      else {
        pickSpecChar();
      }
      console.log(passList[x]);
    }

    return passList.join("");

  }
  else if (typeof passLen === "string"){
    window.alert("Invalid response. Please pick a number between 8-128");
    generatePassword();
  }
  else {
    window.alert("Please pick a password length between 8-128");
    generatePassword();
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
