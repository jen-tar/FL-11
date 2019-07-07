let a = parseInt(prompt('Enter first length'), 10);
let b = parseInt(prompt('Enter second length'), 10);
let c = parseInt(prompt('Enter third length'), 10);

if (a + b > c && b + c > a && c + a > b) {
    if (a === b && b === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || a === c || c === b) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist')
}
