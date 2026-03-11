// 7. Find Years When Jan 1 is Sunday (2014?2050)
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

function firstJanIsSunday() {
  for (let year = 2014; year <= 2050; year++) {
    const janFirst = new Date(year, 0, 1);
    janFirst.getDay() === 0 &&
      console.log(`1st January is Sunday in the year ${year}`);
  }
}
firstJanIsSunday();
