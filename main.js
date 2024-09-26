// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

function getSign(num) {
  if (num < 0) return "negative";
  else if (num > 0) return "positive";
  else return "zero";
}

function evenOrOdd(num) {
  if (num % 2 == 0) return "even";
  else return "odd";
}

function multipleOf10(num) {
  if (num % 10 == 0) return "yes";
  else return "odd";
}

function numDigits(num) {
  var amount = 0;
  var numString = `${num}`;
  for (var i = 0; i < numString.length; i++) {
    amount++;
  }
  if (num < 0) {
    amount--;
  }
  return amount;
}

// num = 6, opNum = 6, i = 0

function isPrime(num) {
  var opNum = num; // temp number. operating number
  for (var i = 2; i < num; i++) {
    if (opNum % i == 0) return "false";
  }
  return "true";
}

// 6 :  check 2-5
// 6 % 2 = 0  (NOT prime, break)
// 6 % 3 = 0
// 6 % 4 = 2
// 6 % 5 = 1

// 5 : check 2-4
