
//* ****************************************************
//* 🔹 Object Iteration in JavaScript
//* ****************************************************
let obj = {
    name: "Rohan",
    age: 23,
    gender: "male",
    city: "Kotdwar"
};

//* ✅ Using for...in loop (Iterates over both direct & inherited properties)
console.log("Using for...in loop:");
for (let key in obj) {
    console.log(key, obj[key]);   
}

/*
Output:
name Rohan
age 23
gender male
city Kotdwar
*/

//* ✅ Using Object.keys(obj) (Iterates over only own properties)
console.log("Using Object.keys():", Object.keys(obj));

/*
Output:
['name', 'age', 'gender', 'city']
*/

//* ****************************************************
//* 🔹  Inheritance & Object.create()
//* ****************************************************
let obj2 = Object.create(obj); // obj2 inherits from obj
obj2.money = 420;
obj2.id = "roh";

console.log("obj2:", obj2);
/*
Output:
{
  money: 420,
  id: "roh"
}
*/

//* ✅ Object.keys() - Only returns OWN properties (doesn't return inherited properties)
console.log("Object.keys(obj2):", Object.keys(obj2));
/*
Output:
['money', 'id']
*/

//* ✅ for...in loop - Returns both OWN & INHERITED properties
console.log("Using for...in loop on obj2:");
for (let key in obj2) {
    console.log(key); 
}

/*
Output:
money
id
name  ✅ (Inherited)
age   ✅ (Inherited)
gender ✅ (Inherited)
city  ✅ (Inherited)
*/


//* How to Prevent Inherited Properties from Appearing in for...in?
//! Use obj.hasOwnProperty(key) inside the loop:
console.log("Using for...in loop with hasOwnProperty():");
for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {  // ✅ Filters out inherited properties
        console.log(key);
    }
}

/*
Output:
money
id
*/
