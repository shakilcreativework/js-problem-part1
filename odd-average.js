/**
 * function tasks an array as parameter
 * give me the average of the odd numbers in the array
 */

function oddAverage(numbers){
    // console.log(numbers);
    const oddList = [];
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        if(number % 2 !== 0){
            oddList.push(number);
            sum += number;
        }
    }
    // console.log(oddList);
    let average = sum / oddList.length;
    return average;
}


function evenAverage(numbers){
    // console.log(numbers);
    const evenList = [];
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            evenList.push(number);
            sum += number;
        }
    }
    // console.log(oddList);
    let average = sum / evenList.length;
    return average;
}

const digits = [35, 64, 73, 85, 95, 34, 64, 898, 4546, 245];
console.log(oddAverage(digits));
console.log(evenAverage(digits));