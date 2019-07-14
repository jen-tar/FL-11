function add(x) {
    return x + 1;
}

function pipe(number, ...functions) {
    for (let i = 0; i < functions.length; i++) {
        number = functions[i](number);
    }
    return number;
}

pipe(1, add);
