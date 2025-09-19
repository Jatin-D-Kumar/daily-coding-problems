
function scoreStudents(equation, studentAnswers) {
    // Evaluate the correct answer by evaluating the equation string
    const correctAnswer = eval(equation);
    
    // To keep track of scores
    const scores = [];

    studentAnswers.forEach(answer => {
        if (typeof answer === 'number' && answer === correctAnswer) {
            scores.push(1); // Full score if the answer is correct
        } else if (typeof answer === 'string') {
            const parsedAnswer = parseFloat(answer);
            if (!isNaN(parsedAnswer) && parsedAnswer === correctAnswer) {
                scores.push(1); // Full score if the string answer is correct
            } else {
                scores.push(0); // No score for incorrect answers
            }
        } else {
            scores.push(0); // No score for invalid answers
        }
    });

    return scores;
}

// Example Usage
const equation = "3 + 5 * 2"; // This should evaluate to 13
const studentAnswers = [13, "