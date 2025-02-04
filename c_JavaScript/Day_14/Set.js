// 🔹 SET: A collection of UNIQUE values (No duplicates allowed)

// ✅ Creating a Set
const set1 = new Set([10, 20, 30, 40, 10, 30]); // Duplicates are removed
console.log(set1); // Output: Set(4) { 10, 20, 30, 40 }
console.log(typeof set1); // Output: 'object' (Set is an object)

// ✅ Adding elements to a Set
const set2 = new Set();
set2.add(4);
set2.add(6);
set2.add("Rohit");
set2.add(30);
console.log(set2); // Output: Set(4) { 4, 6, "Rohit", 30 }
console.log(set2.size); // Output: 4 (Size of the Set)

// ✅ Deleting an element from Set
set2.delete(6);
console.log(set2); // Output: Set(3) { 4, "Rohit", 30 }

// ✅ Checking if a value exists in Set
const user_id = new Set(["rohit_negi9", "Mohit_91", "ravi.93", "chhavi_90", "sumit_99"]);
let new_user = "rohit_negi9";
console.log(user_id.has(new_user)); // Output: true

// ✅ Clearing a Set (Removes all elements)
user_id.clear();
console.log(user_id); // Output: Set(0) {}

// 🔹 Converting between Arrays & Sets

// ✅ Convert an array to a Set (removes duplicates)
let arr = [10, 30, 20, 10, 40, 50, 30];
const uniqueSet = new Set(arr);
console.log(uniqueSet); // Output: Set(4) { 10, 30, 20, 40, 50 }

// ✅ Convert a Set back to an array
arr = [...uniqueSet];
console.log(arr); // Output: [10, 30, 20, 40, 50]

// 🔹 Set Operations

let setA = new Set([10, 20, 30, 40, 50]);
let setB = new Set([10, 20, 70, 80]);

// ✅ Union (Combine both sets, removing duplicates)
const unionSet = new Set([...setA, ...setB]);
console.log(unionSet); // Output: Set(6) { 10, 20, 30, 40, 50, 70, 80 }

// ✅ Intersection (Common elements in both sets)
const intersectionSet = [...setA].filter((num) => setB.has(num));
console.log(intersectionSet); // Output: [10, 20]

// 🔹 Iterating over a Set

// ✅ Using for...of
for (let value of setA) {
    console.log(value);
}

// ✅ Using forEach
setA.forEach((value) => console.log(value));
