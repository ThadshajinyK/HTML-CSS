function getCurrentDayAndTime() {
    // Days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Getting the current date and time
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()]; 
    let hours = currentDate.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Converting to 12-hour format
    hours = hours % 12 || 12;

    // Getting current minutes and seconds
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Displaying the result in the HTML
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
      <p>Today is: ${dayOfWeek}.</p>
      <p>Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}.</p>
    `;
  }

  //  when the page loads call the function
  getCurrentDayAndTime();

 
  setInterval(getCurrentDayAndTime, 1000); 

  