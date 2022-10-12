// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

let givenArr = [
  [7, 1, 3],
  [2, 8, 7],
  [1, 9, 5],
];

let max = 0;
givenArr.forEach((ele, ind, arr) => {
  let resp = ele.reduce((pre, ini) => pre + ini, 0);
  resp > max ? (max = resp) : null;
});

console.log(max);

appDiv.innerHTML = `<h1>${max}</h1>`;
