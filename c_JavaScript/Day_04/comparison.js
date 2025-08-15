//* ****************************************************
//* Comparison Operators in JavaScript
//* ****************************************************

//! Purpose:
//? Compare values and return a boolean result (true/false).

//! Comparison Operators:
//? 1. Equal to (==)       -> Compares values with type conversion.
//? 2. Strict Equal (===)  -> Compares values and types.
//? 3. Not Equal (!=)      -> Checks if values are not equal (type conversion).
//? 4. Strict Not Equal (!==) -> Checks if values or types are not equal.
//? 5. Greater Than (>)    -> Checks if one value is greater.
//? 6. Less Than (<)       -> Checks if one value is smaller.
//? 7. Greater or Equal (>=)-> Checks if one value is greater or equal.
//? 8. Less or Equal (<=)  -> Checks if one value is smaller or equal.


//! 1. Number to Number Comparisons:
let a1 = 1, a2 = 2;

console.log(a1 == a2);   //* false
console.log(a1 > a2);    //* false
console.log(a1 < a2);    //* true
console.log(a1 >= a2);   //* false
console.log(a1 <= a2);   //* true

//! 2. Type Conversion in Comparisons:
let num = 10, str = "10";

console.log(num == str); //* true -> String is converted to Number.
console.log(num == "20");//* false

//? Example with type conversion and invalid numbers:
let str1 = "30";
console.log(num < str1); //* true -> String "30" is converted to Number.

str1 = "30x";
console.log(num < str1); //* false -> "30x" is converted to NaN.

//! 3. Strict Equality (===):
//? Checks type first, then value.
console.log(num === str); //* false -> Different types.
let a4 = 30, a3 = 30;
console.log(a4 === a3);   //* true -> Same type and value.

//! 4. Null and Undefined Comparisons:
console.log(null == undefined);  //* true -> They are "loosely equal".
console.log(null === undefined); //* false -> Different types null as object undefined as undefined.

//? Null compared to numbers:
console.log(null == 0);   //* false due to the rule null will be only equivalent to undefined.
console.log(null < 0);    //* false -> Null converted to 0 then do comparison.
console.log(null > 0);    //* false
console.log(null <= 0);   //* true
console.log(null >= 0);   //* true

//? Undefined compared to numbers:
console.log(undefined == 0);    //* false due to the rule undefined will be only equivalent to null.
console.log(undefined < 0);     //* false -> Undefined converted to NaN.
console.log(undefined > 0);     //* false
console.log(undefined <= 0);    //* false
console.log(undefined >= 0);    //* false
//? Special Case:
console.log(NaN == NaN);        //* false -> NaN is not equal to itself.

//! 5. String to Number Conversion:
let str3 = "rohit", str4 = "mohan";
console.log(Number(str3) == Number(str4)); //* false -> Both are NaN.

let abc1 = 123, abc2 = "123", abc3 = 123;
console.log(abc1 == abc2 == abc3); //* false as abc1 == abc2 gives true then true == abc3 gives false as boolean not eqals number.
abc3 = true;
console.log(abc1 == abc2 == abc3); //* true -> above method is made right as abc3 becomes true so true == true gives true.

//! 6. String Comparisons:
console.log('Z' > 'A');       //* true -> Lexicographical order.
console.log('Glow' > 'Glew'); //* true -> "o" > "e".
console.log('Bee' > 'Be');    //* true -> Longer strings are greater.

//! 7. Logical Operators:
let age = 18, money = 420;

//? AND (&&) Operator:
console.log(age > 18 && money > 200); //* false -> Both conditions must be true.

//? OR (||) Operator:
console.log(age > 10 || money > 200); //* true -> At least one condition is true.

//? NOT (!) Operator:
console.log(!(age > 10)); //* false -> Negates the result.

//! 8. Bitwise Operators:
//? AND (&), OR (|), XOR (^), Left Shift (<<), Right Shift (>>):
console.log(4 & 5);  //* 4 -> Bitwise AND.
console.log(11 | 14); //* 15 -> Bitwise OR.
console.log(5 ^ 7);  //* 2 -> Bitwise XOR.
console.log(5 << 3); //* 40 -> Left shift (5 * 2^3).
console.log(20 >> 2); //* 5 -> Right shift (20 / 2^2).


//! Key Notes:
//? Comparison operators return true/false.
//? `==` and `!=` allow type conversion; avoid when strict equality is needed.
//? Use `===` and `!==` for precise comparisons.
//? Strings are compared in dictionary order (character-by-character).
//? Be cautious comparing `null` or `undefined`. Always handle them explicitly.