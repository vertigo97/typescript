"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(n) {
    console.log("the number is" + n);
}
function addHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add;
console.log(combineValues(8, 9));
