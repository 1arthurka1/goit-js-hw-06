const input = document.querySelector('#validation-input');

function handleInputBlur() {
  const validLength = parseInt(input.dataset.length);
  const currentLength = input.value.length;

  if (currentLength === validLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}

input.addEventListener('blur', handleInputBlur);
