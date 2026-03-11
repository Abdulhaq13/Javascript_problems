// 8. Random Integer Guess Game
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

function randomIntGuessGame() {
  const num = Math.floor(Math.random() * 10) + 1;
  const user = Number(prompt("Guess a number between 1 to 10"));
  console.log(`Correct number: ${num}`);
  console.log(`You guessed: ${user}`);
  console.log(`${user === num ? "Good work" : "Not matched"} `);
}
randomIntGuessGame();
