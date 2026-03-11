// 6. Check Leap Year (Gregorian Calendar)
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

const leapYearOneLiner = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
