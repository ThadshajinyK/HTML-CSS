
const userDefinedVariables = {};// I am creating an objest to store the variable

    
const nameOfVariable = prompt('Enter a variable name:');
const ValueOfVariable = prompt('Enter a value for the variable:');


if (nameOfVariable !== null && nameOfVariable !== '') {
  // Create / update the variable in the object
  userDefinedVariables[nameOfVariable] = ValueOfVariable;

  alert(`Variable '${nameOfVariable}' created with value: ${ValueOfVariable}`);
  document.getElementById('output').innerHTML=`Variable name: '${nameOfVariable}' , value: ${userDefinedVariables[nameOfVariable]}`;
  

} else {
  
  alert('Invalid variable name. Please enter a valid name.');
}

// Example: Accessing the created variable
// If the user defined a variable named "myVar", you can access it like this:
// const myVarValue = userDefinedVariables['myVar'];
// alert(`Value of 'myVar': ${myVarValue}`);
