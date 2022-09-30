const dob = document.querySelector('#birth-date');
const luckyNumber = document.querySelector('#lucky-number');
const errorContainer = document.querySelector('#error');
const submitBtn = document.querySelector('#submit-button');
const result = document.querySelector('#result');
const sadImage = document.querySelector('#sad');
const happyImage = document.querySelector('#happy');


submitBtn.addEventListener('click', verifyData)

function verifyData() {

  if (dob.value === '' || luckyNumber.value === '') {
    setError('Lucky number and date of birth both are necessary to Proceed. 😤')
  } else {
    if (verifyNumber(+luckyNumber.value) && verifyDOB(dob.value)) {
      const sumOfDOB = calculateDOB(dob.value);
      checkIfLucky(sumOfDOB, +luckyNumber.value)
    }
  }
}

function verifyNumber(luckyNumber) {
  if (luckyNumber < 0) {
    setError('Lucky number must be a positive number.')
    return false
  }
  return true
}

function verifyDOB(dateOfBirth) {
  const today = new Date().setHours(0, 0, 0, 0);
  const selectedDate = new Date(dateOfBirth).setHours(0, 0, 0, 0);
  if (selectedDate > today) {
    setError('Date of Birth is not valid.')
    return false;
  }
  return true;
}


function calculateDOB(dateOfBirth) {
  const selectedDate = dateOfBirth.replaceAll('-', '0');
  let finalSum = 0
  for (let i = 0; i < selectedDate.length; i++) {
    finalSum = finalSum + (+selectedDate[i]);
  }
  return finalSum;
}

function checkIfLucky(dateOfBirthSum, luckyNumber) {
  hideError()
  if (dateOfBirthSum % luckyNumber === 0) {
    result.value = 'Your Birthday is lucky. 🤩'
    displayHappyImage()
  } else {
    result.value = 'Your Birthday is unlucky. So sad 🤐'
    displaySadImage()
  }
}

function setError(errMessage) {
  errorContainer.innerText = errMessage;
  errorContainer.style.display = 'block';
  result.value=''
  hideImages()
}

function hideError() {
  errorContainer.style.display = 'none'
}

function displayHappyImage() {
  happyImage.style.display = 'block'
  sadImage.style.display = 'none'
}

function displaySadImage() {
  sadImage.style.display = 'block'
  happyImage.style.display = 'none'
}

function hideImages() {
  happyImage.style.display = 'none'
  sadImage.style.display = 'none'
}