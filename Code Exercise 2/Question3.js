let numList = [20, 40, -10, 5, 40, 5, 11]

function largestNumber(numList) {
  let largest = numList[0]

  for (i = 1; i < numList.length; i++) {
    if (largest < numList[i]) {
      largest = numList[i]
    }
  }
  console.log(largest)
}

largestNumber(numList)
