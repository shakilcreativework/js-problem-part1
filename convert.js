// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// console.log(inchToFeet(63));


function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    // console.log(feetNumber);
    const inchRemaining = inch % 12;
    // console.log(inchRemaining);
    // console.log(`${feetNumber}.${inchRemaining}`);
    return `${feetNumber} feet ${inchRemaining} inch`;
}

// console.log(inchToFeet2(75));


function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}