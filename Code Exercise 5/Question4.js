function sumOfElements(array) {
  return array.length === 0 ? 0 : array[0] + sumOfElements(array.slice(1))
}

console.log(sumOfElements([10, 20, 34]))
