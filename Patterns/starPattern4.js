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
// PrintStarReverse(5)

{
  /**
   ********
   ***  ***
   **    **
   *      *
   *      *
   **    **
   ***  ***
   ********
   */
}
function getStarSquarePattern(n) {
  //Decrement order loop
  for (let i = n; i > 0; i--) {

    //Print star (*)
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }

    //Print space(" ")
    for (let k = 1; k <= 2 * n - 2 * i; k++) {
      process.stdout.write(" ");
    }

    //Print star(*)
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
  //Increment order loop
  for (let i = 1; i <= n; i++) {
    //Print star
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    //Print space
    for (let k = 1; k <= 2 * n - 2 * i; k++) {
      process.stdout.write(" ");
    }
    //Print star
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// getStarSquarePattern(6);

{
  /**
   *      *
   **    **
   ***  ***
   ********
   ***  ***
   **    **
   *      *
   */
}
function getButterflyPattern(n) {
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <=  i; j++){
      process.stdout.write("*")
    }
    for (let k = 1; k <= 2 * n - 2 * i; k++){
      process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++){
      process.stdout.write("*")
    }
    console.log()
  }
  for (let i = n-1; i >0; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    for (let k = 1; k <= 2 * n - 2 * i; k++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// getButterflyPattern(4)

{
  /**
        *
      *  *
    *  *  *
  *  *  *  *
  *  *  *  *
    *  *  *
     *  *
      *
   */
}
function getDiamondStartPattern(n) {
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n - i; j++){
      process.stdout.write(" ")
    }
    for (let k = 1; k <= i; k++){
      process.stdout.write(" * ")
    }
    console.log()
  }
  for (let i = n; i >0; i--) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write(" * ");
    }
    console.log();
  }
}
getDiamondStartPattern(10)

