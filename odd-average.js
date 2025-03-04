/**
 * function tasks an array as parameter
 * give me the average of the odd numbers in the array
 */

function oddAverage(numbers){
    // console.log(numbers);
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        if(number % 2 !== 0){
            sum += number;
        }
    }
    // console.log(oddList);
    return sum;
}

const digits = [35, 64, 73, 85, 95, 34, 64, 898, 4546];
console.log(oddAverage(digits));