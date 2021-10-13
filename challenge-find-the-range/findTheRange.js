// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let max = array[0];
for (let i = 1; i < array.length; ++i) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max);

let min = array[0];
for (let i = 1; i < array.length; ++i) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log(min);

//console.log(Math.min(...array));
//console.log(Math.max(...array));