// 1. Display Current Day and Time
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
function currentDayTime() {
  const storeDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const day = now.getDay();
  console.log(`Today is: ${storeDay[day]}`);
  let hour = now.getHours();
  // let minutes = now.getMinutes();
  let minutes = 1;
  let seconds = now.getSeconds();

  let period = hour >= 12 ? " PM " : " AM ";
  hour = hour >= 12 ? hour - 12 : hour;

  //Add zeroes to minutes and seconds if less than 10
  if (minutes < 10) {
    // minutes = String(minutes).padStart(2, "0");
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  //if hour is 0 and its PM
  if (hour === 0 && period === " PM ") {
    if (minutes === 0 && seconds === 0) {
      hour = 12;
      period = " Noon ";
    } else {
      hour = 12;
      period = " PM ";
    }
  }

  if (hour === 0 && period === " AM ") {
    if (minutes === 0 && seconds === 0) {
      hour = 12;
      period = " Midnight ";
    } else {
      hour = 12;
      period = " AM ";
    }
  }
  console.log(`Current time is: ${hour}${period}: ${minutes}: ${seconds}`);
}

currentDayTime();
