// 5. Rotate String 'w3resource' Periodically
// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// function rotateStringPeriodically(str) {
//   let data = str;
//   setInterval(() => {
//     const lastChar = data.slice(-1);
//     const restChar = data.slice(0, -1);
//     data = lastChar + restChar;
//     console.log(data);
//   }, 1000);
// }
// rotateStringPeriodically("w3resource");

function rotateStringPeriodically(id) {
  const element = document.getElementById(id);
  const content = element.textContent;
  let data = content;
  setInterval(() => {
    const lastChar = data.slice(-1);
    const restChar = data.slice(0, -1);
    data = lastChar + restChar;
    element.textContent = data;
  }, 500);
}
rotateStringPeriodically("data");
