# 🎯 Number Guessing Game (JavaScript)

A simple and interactive number guessing game built with JavaScript using `prompt()` and `console.log()`. The user selects a maximum number range and tries to guess the randomly generated number within that range.

## 🚀 Features

- User-defined number range
- Random number generation
- Real-time guessing with feedback
- Option to quit the game anytime

## 📋 How It Works

1. The game asks the user to input a **maximum number** (e.g., 50).
2. A **random number** is generated between `1` and the given max.
3. The user is then prompted to guess the number.
4. After each guess:
   - If correct, the game congratulates the user and ends.
   - If too low or too high, the user is prompted again.
   - The user can type `"quit"` anytime to exit the game.

## 💻 Code Example

```js
const max = prompt("How much the number to guessing range");
const number = Math.floor(Math.random() * max) + 1;
let guessing = prompt("Guess the number");

while (true) {
  if (guessing == "quit") {
    console.log("Quit the game");
    break;
  }

  if (guessing == number) {
    console.log("Your guess is right! Congrats! Random number was:", number);
    break;
  } else if (guessing < number) {
    guessing = prompt("Your guess was wrong and too small. Please try again");
  } else {
    guessing = prompt("Your guess was wrong and too large. Please try again");
  }
}

📂 How to Run
Create an index.html file.

Link your JavaScript file or paste the code directly inside a <script> tag.

Open the HTML file in your browser.

📌 Note
This game runs in the browser and uses the prompt() and console.log() functions, so open your developer console to view the results (F12 → Console tab).

🧠 Learnings
Usage of prompt() for user interaction

Math.random() and Math.floor() for generating numbers

Looping with while(true) and conditional logic



# Guessing-Game
