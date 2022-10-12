import './style.css';

const appDiv = document.getElementById('app');

let givenArr = [1, 2, 3, 4, 5, 6, 7];

let middle = Math.ceil(givenArr.length / 2);

appDiv.innerHTML = `<h1>${givenArr.slice(middle, givenArr.length)}</h1>`;
