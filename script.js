document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Correct answers
    const correctAnswers = {
        q1: 'b', // Argentina
        q2: 'b', // Lionel Messi
        q3: 'b', // Real Madrid
        q4: 'c', // Brazil
        q5: 'a', // Alan Shearer
        q6: 'a'  // Uruguay
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    let allAnswered = true;

    // Check each question
    for (let i = 1; i <= totalQuestions; i++) {
        const question = `q${i}`;
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        
        if (!selectedAnswer) {
            allAnswered = false;
            break;
        }

        if (selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Display result
    const resultDiv = document.getElementById('result');
    if (!allAnswered) {
        resultDiv.textContent = 'Please answer all questions!';
        resultDiv.classList.add('fail');
        resultDiv.style.display = 'block';
    } else {
        resultDiv.textContent = `You scored ${score} out of ${totalQuestions}!`;
        resultDiv.classList.remove('fail');
        resultDiv.classList.add(score >= Math.ceil(totalQuestions / 2) ? 'success' : 'fail');
        resultDiv.style.display = 'block';
    }
});