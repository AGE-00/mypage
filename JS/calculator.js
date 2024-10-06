document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    let currentValue = '';
    let operator = '';
    let previousValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value >= '0' && value <= '9' || value === '.') {
                currentValue += value;
                display.value = currentValue;
            } else if (value === 'C') {
                currentValue = '';
                operator = '';
                previousValue = '';
                display.value = '';
            } else if (value === '=') {
                if (previousValue && operator && currentValue) {
                    currentValue = calculate(previousValue, operator, currentValue);
                    display.value = currentValue;
                    previousValue = '';
                    operator = '';
                }
            } else {
                if (currentValue) {
                    if (previousValue && operator) {
                        previousValue = calculate(previousValue, operator, currentValue);
                    } else {
                        previousValue = currentValue;
                    }
                    currentValue = '';
                    operator = value;
                    display.value = previousValue;
                }
            }
        });
    });

    function calculate(a, op, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+': return (a + b).toString();
            case '-': return (a - b).toString();
            case '×': return (a * b).toString();
            case '÷': return (a / b).toString();
        }
    }
});