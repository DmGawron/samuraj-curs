
// const arr = [4,3,645]



// const addNumbersFromArray = (array) => {
//     let number = 0
//   let ab =  array.map(el => number += el )
//     return ab  
//   console.log(number);
// }
// console.log(

//     addNumbersFromArray(arr)
// );


// let num = 0
// for(el of arr) {
//     num += el
// }
// console.log(num);


// const someMath = (a,b) => {
// let sum = 0
//     for(let i = a; i <= b; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(

//     someMath(1,3)
// );



const arr = [4,3,645]



const addNumbersFromArray = (array) => {
    let number = 0
    array.forEach(el => number += el )
    return number
}
console.log(
    addNumbersFromArray(arr)
);