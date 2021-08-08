// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = "!@#$%^&*()<>?";
var numChar = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var useableOpts = "";
var pwResults = "";

// password generation
function generatePassword() {

  var passLength = prompt("How many characters do you want your password");
  console.log(passLength);
  if (passLength < 8 || passLength > 128) {
    alert(
      "Your password must be between 8 and 128 characters. please try again"
    );
    return;
  }

  var useLower = confirm("Do you want to use a lower case Letters?");
  var useUpper = confirm("Do you want to use Upper case letters?");
  var useSpecialChar = confirm("Do you want to use Special characters?");
  var useNum = confirm("Do you want to use Numerial characters?");

  if (
    useLower === false &&
    useUpper === false &&
    useSpecialChar === false &&
    useNum === false
  ) {
    alert("You must Choose at least one character type");
  }
  if (useLower === true) {
    //take chars and concat
    useableOpts = useableOpts.concat(lowerCase);
  }
  if (useUpper === true) {
    useableOpts = useableOpts.concat(upperCase);
  }
  if (useSpecialChar === true) {
    useableOpts = useableOpts.concat(specialChar);
  }
  if (useNum === true) {
    useableOpts = useableOpts.concat(numChar);
  }

  console.log(useableOpts);

  for (var i = 0; i < passLength; i++) {
    var password = Math.floor(useableOpts.length * Math.random());

    pwResults += useableOpts.charAt(password);
    //  .concat(useableOpts[Math.floor(Math.random() * useableChars)]);
  }
  document.querySelector("#password").textContent = pwResults;
}

generateBtn.addEventListener("click", generatePassword);
