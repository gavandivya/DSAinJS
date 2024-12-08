function setZero() {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  let rowL = matrix.length;
  let colL = matrix[0].length;

  let rowArr = new Array(rowL).fill(0);
  let colArr = new Array(colL).fill(0);

  for (let i = 0; i < rowL; i++) {
    for (let j = 0; j < colL; j++) {
      if (matrix[i][j] == 0) {
        rowArr[i] = 1;
        colArr[j] = 1;
      }
    }
  }

  for (let i = 0; i < rowL; i++) {
    for (let j = 0; j < colL; j++) {
      if (rowArr[i] || colArr[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  console.log(rowArr, colArr);
  console.log(matrix);
}

setZero();

var setZeroes = function (matrix) {
  let rowL = matrix.length;
  let colL = matrix[0].length;

  function markRow(i) {
    for (let j = 0; j < colL; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -Infinity;
      }
    }
  }

  function markCol(j) {
    for (let i = 0; i < rowL; i++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -Infinity;
      }
    }
  }

  for (let i = 0; i < rowL; i++) {
    for (let j = 0; j < colL; j++) {
      if (matrix[i][j] == 0) {
        markRow(i);
        markCol(j);
      }
    }
  }

  for (let i = 0; i < rowL; i++) {
    for (let j = 0; j < colL; j++) {
      if (matrix[i][j] == -Infinity) {
        matrix[i][j] = 0;
      }
    }
  }
};

setZeroes();
