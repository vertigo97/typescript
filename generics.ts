// function removeFirstOrder<T>(arr: Array<T>): Array<T> {

//     arr.shift()
//     return arr;
// }

// removeFirstOrder(['312','313','314']);
// removeFirstOrder([255,222,22,1,2]);


interface Burger<T> {
    size: T
    price: number
}

const meal1: Burger<number> = {size: 3, price: 44};