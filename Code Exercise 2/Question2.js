let numList = [1, 2, 3, 4, 5, 6]

function sumOfElements(numList) {
  let sum = 0

  for (let index = 0; index < numList.length; index++) {
    sum += numList[index]
  }
  console.log(sum)
}

sumOfElements(numList)
