let counterValue = 0;
const counter = document.querySelector('#value');
const btnPlusRef = document.querySelector('[data-action="increment"]');
const btnMinusRef = document.querySelector('[data-action="decrement"]');


const counterPlus = () => {
    counterValue += 1;
    counter.textContent = counterValue;
    console.log(counterValue);
}
const counterMinus = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
      console.log(counterValue);
}

btnMinusRef.addEventListener('click', counterMinus);
btnPlusRef.addEventListener('click', counterPlus);
