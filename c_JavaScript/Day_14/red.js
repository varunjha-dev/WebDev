// ✅ REDUCE METHOD (Used to Reduce an Array to a Single Value)
// - Iterates through an array and accumulates a single result based on a function.

// ✅ Example 1: Sum of Array Elements
const arr = [10, 20, 30, 40, 50];

// reduce(callbackFunction, initialValue)
// - acc = Accumulator (stores the result)
// - curr = Current value in the iteration
// - initialValue = Starting value for acc (0 in this case)

const sum = arr.reduce((acc, curr) => acc + curr, 0); // (acc, curr, Index, arr)
console.log(sum); // ✅ Output: 150

// ✅ Example 2: Counting Occurrences in an Array
let fruits = ["orange", "apple", "banana", "orange", "apple", "banana", "orange", "grapes"];

// Goal: Create an object with the count of each fruit
const fruitno = fruits.reduce((acc,curr)=> {
    if (acc.hasOwnProperty(curr))
        acc[curr]++;
    else
    acc[curr] =1;
return acc;
},{})
console.log(fruitno);

// ✅ Alternative (Using Ternary Operator)
const fruitno2 = fruits.reduce((acc, curr) => (acc.hasOwnProperty(curr) ? acc[curr]++ : (acc[curr] = 1), acc), {});
console.log(fruitno2);
