function add(n1, n2) {
    return n1 + n2;
}
function printResult(n) {
    console.log("the number is" + n);
}
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
var combineValues;
combineValues = add;
console.log(combineValues(8, 9));
