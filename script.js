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
var passCriteria = [];
var lower=  'q w e r t y u i o p a s d f g h j k l z x c v b n m';
var upper=  'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M';
var numeric= '1 2 3 4 5 6 7 8 9 0';
var special= "! \" # $ % & ' ( ) * + - . / : ; < = > ? @ [ ] ^ _ ` { | } ~";
var newPass=[];
var combine=[];
var index=0;

function generatePassword() {
 let num = prompt("Enter number of characters", "8-128");
 if (num > 7 && num < 129) {
   passCriteria.push(num);
 } else {
   alert("Must choose a number between 8 and 128!");
   return;
 }
if (confirm("Include lowercase?")==true) {
   lower = lower.split(' ');
   index = Math.floor(Math.random() * lower.length);
   newPass.push(lower[index]);
   combine = combine.concat(lower); }
  else{
    passCriteria.push(false);
  }
  if (confirm("Include uppercase?")==true) {
   upper = upper.split(' ');
     index = Math.floor(Math.random() * upper.length);
     newPass.push(upper[index]);
    combine = combine.concat(upper); }
    else{
    passCriteria.push(false);
    }
  if (confirm("Include numeric?")==true) {
    numeric = numeric.split(' ');
     index = Math.floor(Math.random() * numeric.length);
     newPass.push(numeric[index]);
    combine = combine.concat(numeric); }
    else{
    passCriteria.push(false);
    }
  if (confirm("Include special characters?")==true) {
    special = special.split(' ');
    index = Math.floor(Math.random() * special.length);
    newPass.push(special[index]);
    combine = combine.concat(special); }
      else{
        passCriteria.push(false);
      }
    

   createPassword();
   return;
} 

   function createPassword() {
    if (passCriteria[4] == false) {
      alert("No selections made. Password generation terminated.");
      return;
    }
    else {
     var i = parseInt(passCriteria[0] - newPass.length);
      for ( i; i > 0; i--) {

      index = [Math.floor(Math.random() * combine.length)];
       newPass.push(combine[index]);
      }

      jumbleTumble(); 
      return;
     }
    }

    function jumbleTumble() {
      for (var i = 0; i < 100; i++) {
        index = Math.floor(Math.random() * newPass.length);
        let rand = newPass.splice(index, 1);
        rand = rand.toString();
        newPass.unshift(rand);
      }
      newPass = newPass.toString();
      newPass = newPass.replace(RegExp(',', 'g'), '');
      console.log(newPass);
      return;
    }