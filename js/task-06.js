const inputRef = document.querySelector('#validation-input');
console.log(Number(inputRef.dataset.length));

inputRef.addEventListener('blur', (event) => { 
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid')    }
    else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid')
    }
    
})