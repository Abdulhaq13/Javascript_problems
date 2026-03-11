// 3. Get Current Date in Various Formats
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function currentDate() {
  const now = new Date();
  const currentDate = now.getDate();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const dd = currentDate < 10 ? "0" + currentDate : currentDate;
  const mm = currentMonth < 10 ? "0" + currentMonth : currentMonth;
  console.log(`${mm}-${dd}-${currentYear}`);
  console.log(`${mm}/${dd}/${currentYear}`);
  console.log(`${dd}-${mm}-${currentYear}`);
  console.log(`${dd}/${mm}/${currentYear}`);
}
currentDate();
