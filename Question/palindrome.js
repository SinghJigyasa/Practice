function Palindrome(x) {
  if (x < 0) return false;
  let reverse = 0;
  let num = x;
  while (x > 0) {
    let lastInt = x % 10;
    reverse = reverse * 10 + lastInt;
    x = (x / 10) | 0;
  }
  if (reverse === num) {
    return true;
  } else {
    return false;
  }
}
console.log(Palindrome(121));
