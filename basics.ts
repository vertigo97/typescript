
function add(a: number, b: number, showResult: boolean, phrase: string) {

    // if(typeof a !== 'number' || typeof b !== 'number') {
    //     throw new ErrorEvent('Incorrect input!')
    // }
    // else {



    const result = a + b;

    if(showResult){
     
           console.log(phrase + result);
    
    }
    else{

        return result;
    }
}



const number1 = 4;
const number2 = 3.5;
const printRes = true;
const quoteResult = "The result is :";


add(number1, number2, printRes, quoteResult);
