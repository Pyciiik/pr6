document.addEventListener('DOMContentLoaded', (event) => {
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', function() {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        const resultField = document.getElementById('result');

        if (isNaN(number1) || isNaN(number2)) {
            alert('Будь ласка, введіть коректні числа.');
            return;
        }

        const sum = number1 + number2;
        resultField.value = sum;

        alert(`Результат: ${sum}`);
    });
});
