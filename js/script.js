document.addEventListener('DOMContentLoaded', () => {

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    console.log("Botón presionado:", value);

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value);  // Evalúa la operación
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});
});
