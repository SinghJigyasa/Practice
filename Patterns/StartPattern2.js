{
  /**
   *
   **
   ***
   ****
   *****
   */
}
function getStartPattern() {
  for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= i; j++){
      process.stdout.write("*")
    }
    console.log()
  }
}
// getStartPattern()

{
  /**
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5   
*/
}
function getNumberPattern() {
  for (let row = 1; row <= 5; row++){
    for (let col = 1; col <= row; col++){
      process.stdout.write(col.toString()+ " ")
    }
    console.log()
  }
}
// getNumberPattern()

{
  /**
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5   
*/
}
function getRowPattern() {
  for (let row = 1; row <= 5; row++){
    for (let col = 1; col <= row; col++){
      process.stdout.write(row.toString()+ " ")
    }
    console.log()
  }
}
// getRowPattern()

{
  /**
1 
2 1 
3 2 1 
4 3 2 1 
5 4 3 2 1   
*/
}
function getNumberInReverse() {
  for (let row = 1; row <= 5; row++){
    for (let col = row; col > 0; col--){
      process.stdout.write(col.toString()+ " ")
    }
    console.log()
  }
}
// getNumberInReverse()

{
  /**
a 
b b 
c c c 
d d d d 
e e e e e 
f f f f f f 
g g g g g g g 
h h h h h h h h   
*/
}
function getAlphabetsPattern() {
  for (let row = 97; row <= 104; row++){
    for (let col = 97; col <= row; col++){
      process.stdout.write(String.fromCharCode(row)+" ")
    }
    console.log()
  }
}
// getAlphabetsPattern()

{
  /**
   * * * * *
   * * * *
   * * *
   * *
   *
  */
}
function getReverseStarPattern() {
  for (let row = 5; row > 0; row--){
    for (let col = row; col > 0; col--){
      process.stdout.write("*" + " ")
    }
    console.log()
  }
}
// getReverseStarPattern()

{
  /**
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1   
*/
}
function getReverseNumber() {
  for (let row = 5; row > 0; row--){
    for (let col = 1; col <= row; col++){
      process.stdout.write(col.toString() + " ")
    }
    console.log()
  }
}
// getReverseNumber()

{
  /**
 5 
5 4 
5 4 3 
5 4 3 2 
5 4 3 2 1 
*/
}
function ReverseNumber() {
  for (let row = 1; row <= 5; row++){
    for (let col = 1; col <= row; col++){
      process.stdout.write((5-(col-1)).toString() + " ")
    }
    console.log()
  }
}
ReverseNumber()