const array = [1, 11,  3 , 31, 4, 21, 2];
function compareNumbers(a, b) {
    console.log(typeof a);

    return a - b;
}
console.log(array.sort(compareNumbers));
console.log(array.reduce(
    (sum, currentValue) => sum + currentValue
));
