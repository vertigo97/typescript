function add(n1: number, n2: number) {
    return n1 + n2;
}


function printResult(n: number):void {
    console.log("the number is" + n);

}

function addHandle(n1: number, n2: number, cb: (num: number)=> void){
    const result = n1 + n2;
    cb(result);
}

addHandle(10,20,(result)=> {
    console.log(result);
});

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8,9));

