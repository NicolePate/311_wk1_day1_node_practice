const isEven = (num) => {
  // write code for numbers.isEven
if(num % 2 === 0) {
  return true;
}
};

// num % 2 === 0 ? true : false;

const sum = (arr) => {
  // write code for numbers.sum
let sum = arr.reduce(function(a,b){
  return a+b;
})
return sum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}