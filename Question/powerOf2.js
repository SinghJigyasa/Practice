function PowerOf2(num) {
  if (num < 1) return false;
  while (num !== 1) {
    if (num % 2 === 1) return false;
    num = num / 2;
  }
  return true;
}
console.log(PowerOf2(16))
