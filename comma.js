function sumCommaSeparatedNumbers(input) {
  if (input === "") {
    return 0;
  }

  let sum = 0;
  let currentNumber = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === "," || i === input.length - 1) {
      if (currentNumber !== "") {
        const num = Number(currentNumber); 

        if (!isNaN(num)) {
          sum += num;
        }

        currentNumber = ""; 
      }
    } else if (!isNaN(Number(char))) {
      currentNumber += char;
    }
  }

  return sum;
}


console.log(sumCommaSeparatedNumbers("1,2,3")); 
console.log(sumCommaSeparatedNumbers("1,a,3")); 
console.log(sumCommaSeparatedNumbers("aaa")); 