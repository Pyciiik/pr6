document.addEventListener('DOMContentLoaded', (event) => {
    const checkButton = document.getElementById('checkButton');
    const feedback = document.getElementById('feedback');

    checkButton.addEventListener('click', function() {
        const answers = {
            q1: '0',
            q2: '1',
            q3: '1',
            q4: '1'
        };

        let correct = true;

        for (let key in answers) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            if (!selected || selected.value !== answers[key]) {
                correct = false;
                break;
            }
        }

        if (correct) {
            feedback.textContent = 'Правильно!';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Неправильно. Спробуйте ще раз.';
            feedback.style.color = 'red';
        }
    });
});
