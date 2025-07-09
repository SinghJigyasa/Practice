{/**Print the table of the n  */ }
function printTable(n) {
  let i = 1;
  while (i <= 10) {
    console.log(`${n}*${i}=${n * i}`)
    i++
  }
}
// printTable(6)

{/** Print factor of a number */ }
function printFactor(n) {
  let i = 1
  while (i <= n) {
    if (n%i == 0) {
      process.stdout.write(i.toString()+" ")
    } 
    i++
  }
}
// printFactor(150)

{/** Print even number */ }
function printEvenNumber(n) {
  let i = 2;
  while (i <= n) {
    if (i % 2 == 0) {
      process.stdout.write(i.toString()+" ")
    }
    i++
  }
}
// printEvenNumber(14)

function PrintOddNumber(n) {
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      process.stdout.write(i.toString()+ " ")
    }
    i++
  }
}
// PrintOddNumber(14)