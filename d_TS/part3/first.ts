// ✅ Interface defines a structure for an object 
interface Person {
    name: string,
    age: number,
    gender: string,
    aadhar?: number // ? makes this property optional
}

// ✅ Creating an object of type Person
const obj: Person = {
    name: "Rohit",
    age: 20,
    gender: "Male",
    // aadhar is optional, so it's omitted
}

// -------------------------------------------------------------------

// ✅ Another Interface Example
interface Customer {
    name: string,
    age: number,
    balance: number
}

// ✅ Readonly: Prevents modification of properties after initialization
const obj2: Readonly<Customer> = {
    name: "Rohit",
    balance: 210,
    age: 20
}
// obj2.balance = 500; ❌ Error: Cannot assign to 'balance' because it is a read-only property

// -------------------------------------------------------------------

// ✅ Utility Types 
// - Partial<T>: Makes all properties optional
// - Required<T>: Makes all properties mandatory
// - Readonly<T>: Prevents modification of properties

// -------------------------------------------------------------------

// ✅ Array of Objects (Using Union Type)
interface People { name: string, age: number }
interface Manager { salary: number, id: string }

// ✅ An array that can store both People and Manager types
const arr: (People | Manager)[] = [
    { name: "Rohit", age: 20 },
    { name: "Mohit", age: 18 },
    { salary: 20000, id: "2321" } // Different structure but valid due to union type
];

// -------------------------------------------------------------------

// ✅ Function in TypeScript
function greet(a: number): number {
    console.log(a); // Prints the number
    return a + 5;   // Returns number + 5
}

console.log(greet(10)); // Output: 15

// ✅ Function with multiple parameters
function meet(msg: string, val: number): void {
    console.log(msg, val);
}

meet("Anshika Verma", 4);

// ✅ Default Parameter (If no argument is passed, default value is used)
function neet(msg: string = "Jit") {
    console.log(msg);
}

neet();        // Output: Jit
neet("Bittu"); // Output: Bittu

// ✅ Optional Parameter (If not provided, uses fallback value)
function GATE(person?: string) {
    console.log(person || "Mohan");
}

GATE("Rohit"); // Output: Rohit
GATE();        // Output: Mohan

// -------------------------------------------------------------------

// ✅ Arrow Function
const sum = (a: number, b: number): number => {
    return a + b;
};

console.log(sum(3, 4)); // Output: 7

// -------------------------------------------------------------------

// ✅ Callback Function (Function passed as an argument)
type Chill = (amount: number) => void; // Defines type for callback function

const squareRoot = (val: number) => {
    return val * val;
};

// Function that takes a number and a callback function
function placeOrder(order: number, callback: Chill): void {
    const amount: number = order + 10;
    callback(amount); // Calls the callback function with new amount
}

placeOrder(10, (amount) => {
    console.log(amount); // Output: 20
});

// -------------------------------------------------------------------

// ✅ Rest Parameter (Allows multiple arguments to be passed as an array)
function total(...arr: number[]) {
    let ans: number = 0;
    arr.forEach((val: number) => ans += val); // Adds all values in the array
    console.log(ans);
}

total(2, 3, 1, 4, 123, 1, 12, 10); // Output: 156

// -------------------------------------------------------------------

// ✅ Extending Interfaces
interface Human {
    name: string,
    age: number
}

// ✅ Teacher inherits from Human and adds new properties
interface Teacher extends Human {
    salary: string,
    id: number
}

// ✅ BankEmployee inherits from Human and adds new properties
interface BankEmployee extends Human {
    salary: string,
    position: string
}

// ✅ Object of Teacher Type
const obj8: Teacher = {
    name: "Rohit",
    age: 20,
    salary: "chillar",
    id: 123
};
