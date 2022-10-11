let str = 'hello word'

function capitlize(str) {
  str = str.split(' ')

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1)
  }

  return str.join(' ')
}

console.log(capitlize(str))
