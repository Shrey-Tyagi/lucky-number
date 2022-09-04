const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");

function calculateSum(date) {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
}


function checkIsNumberLucky(sumOfDate, numberToCheck){
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is a lucky number!! 🥳 ✨ 🥳 `);
  }
  showMessage(`${numberToCheck} is not that lucky 😕`);
}

const showMessage = (message) => {
  displayMessage.innerText = message;
};

checkButton.addEventListener("click", check);

function check(){
    const date = dateOfBirth.value;
    const numberToCheck = luckyNumber.value;
    if (date && numberToCheck) {
      const sumOfDate = calculateSum(date);
      checkIsNumberLucky(sumOfDate, numberToCheck);
    } else {
      showMessage("Please enter both the fields");
    }
}