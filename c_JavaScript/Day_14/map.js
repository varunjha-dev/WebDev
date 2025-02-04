// 🔹 MAP: A collection of KEY-VALUE pairs (Keys must be unique) Maintains the order of Insertion

// ✅ Creating a Map
const map1 = new Map();
map1.set(3, 90);
map1.set("Rohit", 45);
map1.set(20, "Mohan");

console.log(map1); 
// Output: Map(3) { 3 => 90, 'Rohit' => 45, 20 => 'Mohan' }

// ✅ Updating an existing key (Duplicates are not allowed, it updates instead)
map1.set("Rohit", 40);
console.log(map1); 
// Output: Map(3) { 3 => 90, 'Rohit' => 40, 20 => 'Mohan' }

// ✅ Deleting a key-value pair
map1.delete(3);
console.log(map1); 
// Output: Map(2) { 'Rohit' => 40, 20 => 'Mohan' }

// ✅ Checking if a key exists
console.log(map1.has("Rohit")); // Output: true

// ✅ Getting the size of a Map
console.log(map1.size); // Output: 2

// ✅ Clearing all key-value pairs
map1.clear();
console.log(map1); // Output: Map(0) {}

// 🔹 Creating a Map with initial values
const map2 = new Map([
    [4, "rohit"],
    ["Mohan", "rohan"],
    [30, 9],
    [63,78]
]);

console.log(map2); 
// Output: Map(3) { 4 => 'rohit', 'Mohan' => 'rohan', 30 => 9 }

// 🔹 Iterating over a Map

// ✅ Using for...of loop (Returns key-value pairs as arrays)
for (let value of map2)
    console.log(value);  
// Output: [ 4, 'rohit' ], [ 'Mohan', 'rohan' ], [ 30, 9 ]

// ✅ Using destructuring to access keys and values
for (let [key, value] of map2)
    console.log(key, value);
// Output: 4 rohit, Mohan rohan, 30 9

// 🔹 KEY TYPES IN MAP
// Unlike objects, where keys are always **strings** or **symbols**, 
// in Maps, keys can be of ANY type: numbers, strings, booleans, objects, etc.
