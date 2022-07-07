
/*----------------------Array.from()--------------------*/

/* const array = Array.from("123456789") 
console.log(array); 


/*----------------------Array.keys()--------------------
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); 

const num = { 5: 'a', 7: 'b', 3: 'c' };
console.log(Object.keys(num)); 

const num1 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(num1)); // console: ['2', '7', '100']
 */

/*-----------------Array.find() & Array findIndex()------------------*/

const numbers = [2, 4, 10, 14, 16, 29, 35, 70];
let first = numbers.find(myFunction);
let index = numbers.findIndex(myFunction);


function myFunction(value, index, array) {
    return value > 18;
  }

console.log("First number over 18 is " + first);
console.log("First number over 18 has index " + index);


