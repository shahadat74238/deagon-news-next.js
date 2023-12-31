export function getCurrentDate() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const currentDate = new Date();
    const day = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    return `${day}, ${month} ${date}, ${year}`;
  }
  
  // Example usage
//   const currentDateString = getCurrentDate();
//   console.log(currentDateString);
  