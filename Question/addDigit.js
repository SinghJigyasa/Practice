function addDigit(num) {
  while (num > 9) {
    let result = 0;
    while (num > 0) {
      let rem = num % 10;
      num = (num / 10) | 0;
      result = result + rem;
    }
    num = result;
  }
  return num;
}
console.log(addDigit(4245));
