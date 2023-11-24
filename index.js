
function sumMultiple3and5(number) { 
    let sum = 0;

    if (number > 0) {
        for(let i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i
            }
        }
        return sum;
    } else {
        console.log("Enter a positive number");
    }
}

//output of the function assigned to the result variable
const result = sumMultiple3and5(10) //put the value of the desired number in brackets
console.log(result) //exit