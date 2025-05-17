
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

    console.log("Welcome to 'Guess the Word'!");
    console.log(`You have ${maxAttempts} attempts to guess the word.`);

    while (attemptsLeft > 0 && !guessedCorrectly) {
        const userGuess = prompt("Enter your guess:").toLowerCase();

        if (userGuess === secretWord) {
            guess