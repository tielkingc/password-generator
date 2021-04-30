// Assignment code here
var generatePassword = function() {
  var pullLists = []
  var obj = {}

  var letters = ['A','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var specChar = ['_', '#', '$', '%', '^', '&', '*', '?', ';', '+'];

  var passLen = window.prompt("How long do you want your password? 8-128 characters.");

  var passList = [];
  for (var i = 0; i < passLen; i++){
    passList.push("");   
  }

  if (passLen >= 8 && passLen < 129){

    var addSpecChar = window.confirm("Do you want special characters in your password? EX: !@#$%");
    
    var passUpper = window.confirm("Do you want your password to contain uppercase letters?");
    
    var passLower = window.confirm("Do you want your password to contain lowercase lettes?");
    
    var addNum = window.confirm("Do you want your password to contain numbers?");
    
    if (addNum){
      obj[1] = function () {passList[x] = Math.floor(Math.random() * 10)};
      pullLists.push(1)
    }
    if (addSpecChar) {
      obj[2] = function () {passList[x] = specChar[(Math.floor(Math.random()* 10))]};
      pullLists.push(2)
    }
    if (passLower) {
      obj[3] = function () {passList[x] = letters[(Math.floor(Math.random()* 10) + 1)]}
      pullLists.push(3);
    }
    if (passUpper) {
      obj[4] = function () {passList[x] = letters[(Math.floor(Math.random()* 10) + 1)].toUpperCase()}
      pullLists.push(4);
    }

    for (var x = 0; x < passLen; x++){
      var listPull = Math.floor(Math.random() * 10);
      while (pullLists.includes(listPull) === false) {
        listPull = Math.floor(Math.random() * 10);
      }
      obj[listPull]();
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
