function printStars(n) {
  let string = ''

  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      string += '*'
    }

    string += '\n'
  }

  console.log(string)
}

printStars(5)
