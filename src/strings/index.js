const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let subStr = "";
  let arrOfPairs = [];
  for (let i = 0; i < str.length; i+=2){
    subStr = str[i] + str[i+1];
    arrOfPairs.push(subStr);
  }
  return arrOfPairs;
}

const reverse = (str) => {
  // write code for strings.reverse
  const arr = str.split('');
  arr.reverse();
  return arr.join('');

}

module.exports = {
  split,
  pairs,
  reverse
}