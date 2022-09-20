function printYes(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'y') {
      console.log('Yes')
      break
    } else {
      console.log('No')
    }
  }
}

printYes('player')
