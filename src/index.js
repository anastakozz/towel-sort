
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (matrix === undefined) {
    return resultArr; 
  } else {
    for (let i = 0; i< matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      let index;
      if (i % 2 !== 0) {
        index = (matrix[i].length - 1 - n);
      } else {
        index = n;
      }
      resultArr.push(matrix[i][index]);
    }
  }
  return resultArr;}
}

