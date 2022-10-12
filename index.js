import './style.css';

const appDiv = document.getElementById('app');

let givenArr = [1, 2, 3, 4, 1, 6, 7];

const result = {};

let response = false;
givenArr.map((ele, i) => {
  // result[ele] = result[ele]+1|| 1
  if (!result[ele]) result[ele] = 1;
  else {
    result[ele] = result[ele] + 1;
    return (response = true);
  }
});

appDiv.innerHTML = `<h1>${response}</h1>`;
