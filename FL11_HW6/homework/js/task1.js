let ax = parseInt(prompt('Enter the x axis ccoordinates of A point'), 10);
let ay = parseInt(prompt('Enter the y axis coordinates of A point'), 10);

let bx = parseInt(prompt('Enter the x axis coordinates of B point'), 10);
let by = parseInt(prompt('Enter the y axis coordinates of B point'), 10);

let cx = parseInt(prompt('Enter the x axis coordinates of C point'), 10);
let cy = parseInt(prompt('Enter the y axis coordinates of C point'), 10);

console.log(cx === (ax + bx) / 2 && cy === (ay + by) / 2);
