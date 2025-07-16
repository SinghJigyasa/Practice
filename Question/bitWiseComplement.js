function bitWiseComplement(n) {
  let i = 0;
  let result = 0;
  if (n === 0)
    return 1
  while (n > 0) {
    let comp = (n % 2 === 0 ? 1 : 0)   //We can also use xor like comp = n % 2 and in next line comp ^ 1 (if comp is 0 then return 1 and if comp is 1 then return 0)
    result = result + (comp * (2 ** i))
    n = n / 2 | 0
    i++
  }
  return result;
}
console.log(bitWiseComplement(35))