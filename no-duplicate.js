/**
 * array has some duplicate elements
 */

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
// console.log(biryaniKhor);
const numbers = [1, 5, 61, 87, 7, 5, 81, 61];
// console.log(numbers);

function noDuplicate(array){
    // console.log(array);
    const unique = [];
    for(const item of array){
        if(!unique.includes(item)){
            unique.push(item);
        }
    }
    return unique;
}

function noMatch(numbers){
    // console.log(numbers);
    const unique = [];
    for(const item of numbers){
        if(!unique.includes(item)){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);
const uniqueNumbers = noMatch(numbers);
console.log(uniqueNumbers);