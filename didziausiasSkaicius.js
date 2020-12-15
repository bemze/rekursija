const skaiciai = [10, 15, 20, [100, 150], 40];

function biggestNumber (list) {
    let biggest = -Infinity;
    for (let number of list) {
        if (typeof number !== 'number') {
            const biggestChild = biggestNumber(number);
            if (biggestChild > biggest) {
                biggest = biggestChild;
            }
        }
        if (number > biggest) {
            biggest = number;
        }
    }
    return biggest;
}

const ats = biggestNumber(skaiciai);
console.log(ats);