const randomNumber = Math.floor(Math.random() * 10) + 1;// Generate a random integer between 1 and 10

    const userGuess = prompt('Guess a number between 1 and 10:');

    if (userGuess !== null) {
      const parsedUserGuess = parseInt(userGuess, 10);

      if (!isNaN(parsedUserGuess) && parsedUserGuess >= 1 && parsedUserGuess <= 10) {
        if (parsedUserGuess === randomNumber) {
        document.getElementById('output').innerHTML="Good Work! You guessed the correct number.";
        
        } else {
            document.getElementById('output').innerHTML='Not matched. The correct number was ' + randomNumber + '.';
        
        
        }
      } else {
        document.getElementById('output').innerHTML='Invalid input. Please enter a valid number between 1 and 10.';
        
      }
    } else {
      alert('Game canceled.');
    }