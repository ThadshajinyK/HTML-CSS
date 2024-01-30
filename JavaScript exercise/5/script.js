
 const firstNumber = prompt('Enter the first number:');
 const secondNumber = prompt('Enter the second number:');

 // read two numbers
 const parsedFirstNumber = parseFloat(firstNumber);
 const parsedSecondNumber = parseFloat(secondNumber);

 
 if (!isNaN(parsedFirstNumber) && !isNaN(parsedSecondNumber)) {
   
   const multiplicationAns = parsedFirstNumber * parsedSecondNumber;
   const divisionAns = parsedFirstNumber / parsedSecondNumber;

   
   document.getElementById('output1').innerHTML=`Multiplication: ${multiplicationAns}`;
   document.getElementById('output2').innerHTML=`Division: ${divisionAns}`
 
} else {
   
   alert('Invalid input. Please enter valid numbers.');
 }