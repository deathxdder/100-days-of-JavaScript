document.addEventListener('DOMContentLoaded', function () {
    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function deleteLast() {
        let display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        let display = document.getElementById('display');
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Ошибка';
        }
    }

    // Назначаем функции глобально, чтобы они были доступны в `onclick`
    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.calculate = calculate;
});