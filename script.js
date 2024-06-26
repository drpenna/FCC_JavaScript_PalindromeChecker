let input = document.getElementById("text-input").value;
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

checkBtn.addEventListener("click", writeToResult);

resetBtn.addEventListener("click", resetInput);
function resetInput() {
  document.getElementById("text-input").value = "";
}

function palindromeFormat() {
  input = document.getElementById("text-input").value;
  let inputToLowerCase = input.toLowerCase();
  let inputToArray = Array.from(inputToLowerCase);
  let cleanArray = [];

  for (let i = 0; i < inputToArray.length; i++) {
    if (inputToArray[i].match(/[a-z0-9]/)) {      
      cleanArray.push(inputToArray[i]);
    } //if
  } //for
return cleanArray;
} //function



function palindromeCheck() {
  input = document.getElementById("text-input").value;
  if (input) { 
let newCleanArray = palindromeFormat();
      if (newCleanArray.toString() === newCleanArray.reverse().toString()) {
        return `${input} is a palindrome`;
        } else {
        return `${input} is not a palindrome`;
        }
  } else {
    alert("Please input a value")
    }
}


function writeToResult() {
  let textToWrite = palindromeCheck();
  if (input) {result.innerText = textToWrite;}
}
