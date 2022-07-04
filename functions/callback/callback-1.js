// obter button
const button = document.querySelector('#btnPress');
console.log(button);

function toggle(color) {
  button.classList.toggle(color);
}

// button.addEventListener('click', () => button.classList.toggle('alterColor'));
button.addEventListener('click', () => toggle('alterColor'));
