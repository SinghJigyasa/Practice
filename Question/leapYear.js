{
  /**
    Leap Year Condition:
                        ➡️ It should be divisible by 400;
                        ➡️ It should divisible by 4 and shouldn't divisible by 100
  */
}

function checkLeapYear(n) {
  if (n % 4 === 0 && n % 100 !== 0) {
    return "Entered year is a Leap Year";
  } else if (n % 400 === 0) {
    return "Entered year is a Leap Year";
  } else {
    return "Entered year is not a Leap Year";
  }
}
console.log(checkLeapYear(2020));
