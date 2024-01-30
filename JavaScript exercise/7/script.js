
const num1 = prompt('Enter the first integer:');
const  num2= prompt('Enter the second integer:');


const parsedFirstInteger = parseInt(num1);
const parsedSecondInteger = parseInt(num2);


const resultElement = document.getElementById('result');

//check valid or not
if (!isNaN(parsedFirstInteger) && !isNaN(parsedSecondInteger)) {
  
  const sum = parsedFirstInteger + parsedSecondInteger;

  if (parsedFirstInteger === parsedSecondInteger) {
    // If the values are the same, display triple the sum
    resultElement.innerHTML = `<p>The values are the same. Triple the sum: ${sum * 3}</p>`;
  } else {
    // If the values are different, display the regular sum
    resultElement.innerHTML = `<p>Sum of the two integers: ${sum}</p>`;
  }

} else {
  
  resultElement.innerHTML = '<p>Invalid input. Please enter valid integers.</p>';
}