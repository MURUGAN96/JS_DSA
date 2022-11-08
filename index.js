const inputBox = document.querySelector('.input_box');
const check = document.querySelector('.check'); 
const result = document.querySelector('.result');


check.addEventListener('click',(e)=>{
    const res = memoize(inputBox.value)
    result.textContent = res;
})

let cache ={}
const memoize = (input) =>{
    if(input == 1 ) return 1;

    if(!cache[input]){
        return cache[input] = input*20000000000000000000000;
    }
    else {
        console.log('cached');
        return cache[input]
    }
}
