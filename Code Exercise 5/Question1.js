let numList = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function findIndex(array, target) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] === target) {
        return [i, j]
      }
    }
  }
}

console.log(findIndex(numList, 9))
