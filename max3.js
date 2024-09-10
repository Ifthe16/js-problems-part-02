const jim = 256;
const tim = 389;
const kim = 168;

if (jim > tim && jim > kim) {
    console.log('Jim is the ultimate boss');
}
else if (tim > jim && tim > kim) {
    console.log('Tim is the boss');
}
else {
    console.log('Kim is the kardashians boss');
}

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const max1 = maxOfThree(95, 10, 100);
const max2 = maxOfThree(3700, 130, 1220);
const max3 = maxOfThree(5500, 410, 777);
console.log(max1);
console.log(max2);
console.log(max3);
const ultimateMax = maxOfThree(max1, max2, max3);
console.log(ultimateMax);


const max4 = Math.max(12, 1, 56, 5, 65, 8, 1, 99, 2);
console.log('max is using Math.max', max4);