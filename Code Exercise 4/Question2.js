let ascArrayDuplicate = [1, 2, 3, 4, 4, 5, 6]
let decArrayDuplicate = [6, 5, 4, 3, 3, 2, 1]
let noneArray = [1, 7, 2, 9]

function DuplicatesArrayInSorted(array) {
  let duplicate = false

  for (i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      duplicate = true
    }
  }

  return duplicate
}

console.log(DuplicatesArrayInSorted(ascArrayDuplicate))
console.log(DuplicatesArrayInSorted(decArrayDuplicate))
console.log(DuplicatesArrayInSorted(noneArray))
