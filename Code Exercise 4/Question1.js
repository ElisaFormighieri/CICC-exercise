let ascArray = [1, 2, 3, 4, 5, 6]
let decArray = [6, 5, 4, 3, 2, 1]
let noneArray = [1, 7, 2, 9]

function SortedArray(array) {
  let isAsc = true
  let isDec = true

  for (i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      isAsc = false
    }
  }

  if (isAsc === false) {
    for (i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        isDec = false
      }
    }
  }

  return isAsc || isDec
}

console.log(SortedArray(ascArray))
console.log(SortedArray(decArray))
console.log(SortedArray(noneArray))
