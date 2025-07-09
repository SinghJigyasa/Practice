{
  /**
   *
   **
   ***
   ****
   *****
   */
}
function getStarPattern() {
  for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5 - i; j++){
      process.stdout.write(" ")
    }
    for (let k = 0; k <= i; k++){
      process.stdout.write("*")
    }
    console.log()
  }
}
// getStarPattern()

{
  /**
    1
   12
  123
 1234
12345  
*/
}
function getNumberPAttern(n) {
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n - i; j++){
      process.stdout.write(" ")
    }
    for (let k = 1; k <= i; k++){
      process.stdout.write(k.toString())
    }
    console.log()
  }
}
// getNumberPAttern(10)

{
  /**
        A
     AB
    ABC
   ABCD
  ABCDE
 ABCDEF
  
*/
}

function getAlphabetsPattern() {
  for (let i = 65; i <= 70; i++) {
    for (let j = i; j <= 70; j++) {
      process.stdout.write(" ");
    }
    for (let k = 65; k <= i; k++) {
      process.stdout.write(String.fromCharCode(k));
    }
    console.log();
  }
}
getAlphabetsPattern(); 