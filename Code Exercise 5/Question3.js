function binarySearch(ar, el, compare_fn) {
  var m = 0
  var n = ar.length - 1
  while (m <= n) {
    var k = (n + m) >> 1
    var cmp = compare_fn(el, ar[k])
    if (cmp > 0) {
      m = k + 1
    } else if (cmp < 0) {
      n = k - 1
    } else {
      return k
    }
  }
  return -m - 1
}

function compare_number(a, b) {
  return a - b
}

console.log(binarySearch([1, 2, 3, 4], 3, compare_number))
