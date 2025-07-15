function squareRoot(num) {
  let x = num
  if (x === 0 || x === 1)
    return x;
  let i=1
  while (x > 1) {
    if (i * i > x)
      return i - 1;
    i++
  }
}
console.log(squareRoot(2))