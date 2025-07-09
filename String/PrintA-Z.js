{/** Print Alphabets A to Z */}
function getAlphabets() {
  let i ;
  for (i = 65; i <= 90; i++) {
    // console.log(String.fromCharCode(i))
    process.stdout.write(String.fromCharCode(i) + ", ");
  }
}
// getAlphabets();

{/** Print Number in Reverse order */}
function PrintOneToTen(n) {
  for (let i = n; i > 0; i--){
    process.stdout.write(i +',')
    // console.log(i)
  }
}
// PrintOneToTen(10)

{/** Print 1 to 100 but skip two number O/P: 1,4,7,10,13,16....... */}
function print1to100Skip2Num(n) {
  for (let i = 1; i <= n; i = i + 3){
    process.stdout.write(i + " ")
  }
}
// print1to100Skip2Num(100)

{/** Print table */ }
function printTable(n) {
  for (let i = 1; i <= 10; i++){
    console.log(`${n} * ${i} = ${n*i}`)
  }
}
// printTable(13)

{/** Print exponent 2 power 3 = 8 */ }
function getPower(n, pow) {
  let ans = 1;
  for (let i = 1; i <= pow; i++){
    ans= ans*n
  }
  return ans;
}
// console.log(getPower(2,1))

{/**Sum of n natural number */ }
function sumOfNaturalNumber(n) {
  let ans = (n*(n+1))/2
  return ans 
  // let ans = 0;
  // for (let i = 1; i <= n; i++){
  //   ans += i*i 
  // }
  // return ans
}
// console.log(sumOfNaturalNumber(5))

{/**Find Factorial of a number */ }
function getFactorialNum(n) {
  let ans=1;
  for (let i = 1; i <= n; i++){
    ans = ans*i
  }
  return ans
}
// console.log(getFactorialNum(4))

{/**Find Prime Number */ }
function getPrimeNumber(n) {
  if(n<=1) return "not Prime"
  for (let i = 2; i < n; i++){
    if (n % i == 0) {
      return "Not a Prime Number"
    }
  }
  return "Prime Number"
}
// console.log(getPrimeNumber(1))

{/** Find Fibonacci series  [0,1,1,2,3,5,8,13,....] */ }
function getFibonacci(n) {
  let first = 0; second = 1
  if (n < 1) return first;
  if (n < 2) return second;
  for (let i = 2; i < n; i++){  //   i=2 ,3, 4,5,6
    let temp = second + first;   //1+0 = 1  1+1 =2  2+1 =3  2+3=5
    first = second;               //1       1       2       3
    second = temp;                //1       2       3       5
  }
  return second;
}
console.log(getFibonacci(0))