//task 0
function getNumbers(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(parseInt(a[i]))) {
            result.push(a[i]);
            console.log(result);
        }
    }
    return result;
}
getNumbers('n1um3ber95');

function findTypes(...n) {
    let result = {};
    for (let i = 0; i < n.length; i++) {
        if (result[typeof n[i]]) {
            result[typeof n[i]] = result[typeof n[i]] + 1;
        } else {
            result[typeof n[i]] = 1;
        }

    }
    return result;
}


//task 2
function executeforEach(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = f(arr[i]);
    }
}

//task 3
function mapArray(arr, f) {
    executeforEach(arr, f)
    return arr;
}

//task 4

function filterArray(arr, f) {
    let brr = [];
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            brr.push(arr[i]);
        }
    }
    return brr;

}

//task 5

function showFormattedDate(a) {
    let n = 3;
    let b = a.toDateString().slice(n);
    return `Date:${b}`;

}
//task 6

function canConvertToDate(a) {
    if (Date.parse(a)) {
        return true;
    } else {
        return false;
    }

}

// task 7
function daysBetween(a, b) {
    let c = 1.1574074;
    let d = 100000000;
    return Math.round((b - a) * c / d);
}

//task 8
function getAmountOfAdultPeople(n) {
    let b = Date.now()
    let result = [];
    let d = 6570;
    result = filterArray(n, function (el) {
        return daysBetween(Date.parse(el.birthday), b) > d;
    })
    return result.length;
}
//task 9
function keys(n) {
    let arr = [];
    for (let k in n) {
        if (n.hasOwnProperty(k)) {
            arr.push(k);
        }
    }
    return arr;
}
//task 10
function values(n) {
    let arr = [];
    for (let k in n) {
        if (n.hasOwnProperty(k)) {
            arr.push(n[k]);
        }
    }
    return arr;
}