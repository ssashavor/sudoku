function rules(matrix, i, j, num){
  for (var m = 0; m < 9; m++) {
      if (matrix[m][j] == num) return false;
  }
  for (var m = 0; m < 9; m++) {
      if (matrix[i][m] == num) return false;
  }
  for (var m = 0; m < 3; m++) {
      for (var n = 0; n < 3; n++) {
          if (matrix[(Math.floor((i / 3)) * 3) + m][(Math.floor((j / 3)) * 3 )+ n] == num) return false;
      }
  }
  return true;
  }

module.exports = function solveSudoku(matrix) {

function solve(matrix) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (matrix[i][j] != 0) continue;
      for (var num = 1; num <= 9; num++) {
        if (rules(matrix, i, j, num) == true) {
          matrix[i][j] = num;
          if(solve(matrix)) return true;
          else matrix[i][j] = 0;
        }
      }
      return false;
    }
  }
  return true;
}
  solve (matrix);
  return matrix;
}
