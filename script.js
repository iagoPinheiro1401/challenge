function sumMultiple3and5(number) {
    let sum = 0;
  
    // Checks numbers lower than 'number' and adds them if they are divisible by 3 or 5
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  function validateSum() {
    const inputNumber = document.getElementById("number");
    const resultDiv = document.getElementById("result");
  
    const numberEntered = parseInt(inputNumber.value);
  
    if (!isNaN(numberEntered) && numberEntered > 0) {
      const resultSum = sumMultiple3and5(numberEntered);
      resultDiv.textContent = `the sum of numbers less than ${numberEntered} and divisible by 3 or 5: ${resultSum}`;
    } else {
      resultDiv.textContent = "Please enter a valid positive integer.";
    }
  }
  