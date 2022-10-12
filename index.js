// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

let givenArr = [3, 1, 2, 10, 1];
const result = [];

givenArr.reduce((pre, curr) => {
  result.push(pre + curr);
  return pre + curr;
}, 0);

console.log(result);

appDiv.innerHTML = `<h1>${result}</h1>`;
