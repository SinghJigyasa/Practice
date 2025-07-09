{
  /**
   *****
   *****
   *****
   *****
   *****
   */
}
function get5StarPattern() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// get5StarPattern();

{
  /** 
  11111
  22222
  33333
  44444
  55555
*/
}
function getRowNumberPattern() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5; j++) {
      process.stdout.write(i.toString());
    }
    console.log();
  }
}
// getRowNumberPattern()

{
  /**
12345
12345
12345
12345
12345  
*/
}
function getColNumberPattern() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      process.stdout.write(j.toString());
    }
    console.log();
  }
}
// getColNumberPattern()

{
  /**
  54321
  54321
  54321
  54321
  54321
*/
}
function getColReversePattern() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > 0; j--) {
      process.stdout.write(j.toString());
    }
    console.log();
  }
}
// getColReversePattern()

{
  /**
  1 4 9 16 25
  1 4 9 16 25
  1 4 9 16 25
  1 4 9 16 25
  1 4 9 16 25
*/
}
function getSquarePattern() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      process.stdout.write((j * j).toString() + " ");
    }
    console.log();
  }
}
// getSquarePattern()


{/**
a a a a a 
b b b b b 
c c c c c 
d d d d d 
e e e e e   
*/
}
function getAlphabetcsPatter() {
  for (j = 97; j <= 101; j++) {
    for (let i = 1; i <= 5; i++) {
      process.stdout.write(String.fromCharCode(j) + " ");
    }
    console.log();
  }
}
// getAlphabetcsPatter()

{
 /**
  1 2 3 4 5 
  6 7 8 9 10 
  11 12 13 14 15 
  16 17 18 19 20 
  21 22 23 24 25   
*/
}
function PrintNaturaPattern() {
  let count = 0;
  for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= 5; j++){
      count++
      process.stdout.write(count.toString()+ " ")
    }
    console.log()
  }
}
PrintNaturaPattern()