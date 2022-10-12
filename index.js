import './style.css';

const appDiv = document.getElementById('app');

let givenArr = [1, 2, 3, 4, 1, 6, 7];

const result = {};

let response = false;

//O(logn)
// for(let i=0; i< nums.length; i++){
//   if(!result[nums[i]]) result[nums[i]] = 1;
//     else {
//       result[nums[i]] = result[nums[i]]+1;
//       a=true;
//       break;
//     }
// }

//O(n)
givenArr.map((ele, i) => {
  // result[ele] = result[ele]+1|| 1
  if (!result[ele]) result[ele] = 1;
  else {
    result[ele] = result[ele] + 1;
    return (response = true);
  }
});

appDiv.innerHTML = `<h1>${response}</h1>`;
