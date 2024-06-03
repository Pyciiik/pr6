document.addEventListener('DOMContentLoaded', (event) => {
    const registrationForm = document.getElementById('registrationForm');
    const feedback = document.getElementById('feedback');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        if (password !== confirmPassword) {
            feedback.textContent = 'Паролі не співпадають.';
            feedback.style.color = 'red';
            return;
        }

        if (username.length < 3) {
            feedback.textContent = 'Логін повинен містити принаймні 3 символи.';
            feedback.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) {
            feedback.textContent = 'Некоректна електронна пошта.';
            feedback.style.color = 'red';
            return;
        }

        feedback.textContent = 'Реєстрація успішна!';
        feedback.style.color = 'green';
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
