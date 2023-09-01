
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text' ;

function combine(a: Combinable, b: Combinable, resultConversion: ConversionDescriptor) {

    let result;

    if(typeof a === 'number' && typeof b === 'number' || resultConversion === 'as-number'){
        result= +a + +b;
    }
    else{
        result = a.toString() + b.toString();
    }

    return result;
    // if(resultConversion === 'as-number'){
    //     return +result; /*or parseFloat(result)*/ 
    // }
    // else{
    //     return result.toString();
    // }
    // return result;



    
   
}




const combinedAges  = combine(30,40,'as-number');
console.log(combinedAges);

const stringCombined = combine('ado','aaa','as-text');
console.log(stringCombined);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);