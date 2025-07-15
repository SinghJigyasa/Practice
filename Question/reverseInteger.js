function ReverseInteger(num) {
  let result = 0;
  let Int_Min = -(2 ** 31);
  let Int_Max = (2 ** 31 - 1);
  while (num !== 0) {
    let lastInt = num % 10;
    result = result * 10 + lastInt;
    num = num / 10 | 0;
  }
  if (result < Int_Min || result > Int_Max) {
    return 0;
  }
  else {
    return result;
  }
}
console.log(ReverseInteger(-456))