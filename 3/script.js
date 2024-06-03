document.addEventListener('DOMContentLoaded', (event) => {
    const checkButton = document.getElementById('checkButton');
    const feedback = document.getElementById('feedback');

    checkButton.addEventListener('click', function() {
        const selected = document.querySelector('input[name="answer"]:checked');
        const correctAnswer = '60';

        if (selected) {
            if (selected.value === correctAnswer) {
                feedback.textContent = 'Правильно!';
                feedback.style.color = 'green';
            } else {
                feedback.textContent = 'Неправильно. Спробуйте ще раз.';
                feedback.style.color = 'red';
            }
        } else {
            feedback.textContent = 'Будь ласка, виберіть відповідь.';
            feedback.style.color = 'red';
        }
    });
});
