function add(a, b, showResult, phrase) {
    // if(typeof a !== 'number' || typeof b !== 'number') {
    //     throw new ErrorEvent('Incorrect input!')
    // }
    // else {
    var result = a + b;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 4;
var number2 = 3.5;
var printRes = true;
var quoteResult = "The result is :";
add(number1, number2, printRes, quoteResult);
