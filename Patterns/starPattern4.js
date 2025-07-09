{
  /**
      *
     ***
    *****
   *******
  *********
 ***********
*************
   */
}

function printStar(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// printStar(7);

{
  /**
      1
     121
    12321
   1234321
  123454321
  */
}

function printNumber(n) {
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n - i; j++){
      process.stdout.write(" ")
    }
    for (let k = 1; k <= i; k++){
      process.stdout.write(k.toString())
    }
    for (let k = i - 1; k > 0; k--){
      process.stdout.write(k.toString())
    }
    console.log()
  }
}
// printNumber(5)

function PrintStarReverse(n) {
  for (let i = n; i > 0; i--){
    for (let k = 1; k <= n - i; k++){
      process.stdout.write(" ")
    }
    for (let j = 1; j <= (i * 2 - 1); j++){
      process.stdout.write("*")
    }
    console.log()
  }
}
PrintStarReverse(5)

