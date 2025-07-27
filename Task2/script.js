let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', function (e) {
    const key = e.key;
  if ((/[0-9+\-*/.]/).test(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});