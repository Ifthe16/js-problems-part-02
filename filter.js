// filter () 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = numbers.filter(function (currentValue, index, arr) {
  return currentValue > 4;
});
console.log(result);

// example 02
function checkAdult(age) {
  return age >= 18;
}
const ages = [32, 33, 16, 40];
const result2 = ages.filter(checkAdult);
console.log(result2);


// example 03 (ignore this one)
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

const result3 = numbers.filter(function (currentValue, index, arr) {
  console.log("Element:", currentValue, "Index:", index, "Array:", arr);
  return currentValue > 4 && index % 2 === 0;
});
console.log("Filtered result:", result);


