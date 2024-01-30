function getCurrentDate() {
     
    const currentDate = new Date(); // to get the current date

    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // bcz start from 0 index
    const day = currentDate.getDate();

    // Display the result in the HTML
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
      <p>Current Date: ${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}</p>
    `;
  }

 
  getCurrentDate();