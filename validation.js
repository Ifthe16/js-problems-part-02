function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number';
    }
    const mult = num1 * num2;
    return mult;
}

const result1 = multiply(5, 7);
const result2 = multiply(5, '7');
const result3 = multiply(5, 'seven');
const result4 = multiply([5], [7]);
const result5 = multiply([5, 1], [7]);
const result6 = multiply(5);
const result7 = multiply(5 * 7);
const result8 = multiply(5 * 7, 5 + 9);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);

function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'First name should be a string';
    }
    else if (typeof second !== 'string') {
        return 'Second Name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Rahan', 'Sohan');
const full2 = fullName(5, 7);
const full3 = fullName('Akmal');
console.log(full);
console.log(full2);
console.log(full3);

function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide an object';
    }
    const price = product.price;
    return price;
}

const price = getPrice ({name: 'chulkani dandi', price: 35, color: 'blue'});
const price2 = getPrice(5);
console.log(price);
console.log(price2);

function getSecond(numbers) {
    // console.log(typeof numbers);
    if (Array.isArray(numbers) === false) {
        return 'Please provide an array';
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([1, 25, 69]);
const second2 = getSecond([45, 61, 2]);
const second3 = getSecond(45);
console.log(second, second2);
console.log(second3);