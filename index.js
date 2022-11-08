let interval;

let throttleTime;

const inputBox = document.querySelector('.input_box');
const defaultValue = document.querySelector('.default_value');
const debounceValue = document.querySelector('.debounce_value');
const throttleValue = document.querySelector('.throttle_value');

inputBox.addEventListener('input', (e)=>{
    updateValue(e)
    deBounce(e, 1000);
    throttle(e, 1000)
});

function updateValue(e) {
    defaultValue.textContent = e.target.value;
}
function updateDeBounceValue(e) {
    debounceValue.textContent = e.target.value;
}

function updateThrottleValue(e) {
    throttleValue.textContent = e.target.value;
}

function deBounce(e,delay){
    if(interval) clearTimeout(interval);
    interval = setTimeout(()=>{
        updateDeBounceValue(e)
    },delay)
}

function throttle(e,delay){
    console.log(throttleTime)
    if(throttleTime) return

    throttleTime = setTimeout(()=>{
        updateThrottleValue(e);
        throttleTime = undefined
    },delay)
}
