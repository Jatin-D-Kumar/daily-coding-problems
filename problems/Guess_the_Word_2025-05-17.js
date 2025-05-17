
const words = ["javascript", "python", "java", "ruby", "swift", "golang"];
const maxAttempts = 5;

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function guessTheWord() {
    const secretWord = getRandomWord();
    let attemptsLeft = maxAttempts;
    let guessedCorrectly = false;

    console.log("Welcome to 'Guess 