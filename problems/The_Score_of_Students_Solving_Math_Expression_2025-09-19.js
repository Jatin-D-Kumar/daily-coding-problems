
function scoreStudents(equation, studentAnswers) {
    // Evaluate the correct answer by evaluating the equation string
    const correctAnswer = eval(equation);
    
    // To keep track of scores
    const scores = [];

    studentAnswers.forEach(answer => {
        if (typeof answer === 'number' && answer === correctAnsw