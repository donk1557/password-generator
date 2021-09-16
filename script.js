// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 function generatePassword() {
 var passCriteria = [];
 let num = prompt("Enter number of characters", "8-128");
 if (num > 7 && num < 129) {
   passCriteria.push(num);
 } else {
   alert("Must choose a number between 8 and 128!");
   return;
 }
if (confirm("Include lowercase?")==true) {
  passCriteria.push(true); }
  else{
    passCriteria.push(false);
  }
  if (confirm("Include uppercase?")==true) {
    passCriteria.push(true); }
    else{
    passCriteria.push(false);
    }
  if (confirm("Include numeric?")==true) {
    passCriteria.push(true); }
    else{
    passCriteria.push(false);
    }
  if (confirm("Include special characters?")==true) {
    passCriteria.push(true); }
      else{
        passCriteria.push(false);
      }


createPassword();
}

function createPassword() {

var lower= 'qwertyuiopasdfghjklzxcvbnm';
var upper= 'QWERTYUIOPASDFGHJKLZXCVBNM';
var numeric='1234567890';
var special=" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"






}
