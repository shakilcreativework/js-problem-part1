/**
 * Simple logic
 * year will be a leap year if the year is divisible by 4
 */

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2025));
// console.log(isLeapYear(2052));


/**
 * 1. those year that is not divisible by 100, if the year is divisible by 4 then it will be a leap year.
 * 2. if the year is divisible by 400, then it is a leap year
 */


function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2025));