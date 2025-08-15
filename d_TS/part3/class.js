"use strict";
// ✅ Class Definition in TypeScript
class Person {
    // ✅ Constructor initializes the object properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // ✅ Method inside the class
    greet() {
        console.log(`Hi ${this.name}`);
    }
}
// ✅ Creating Objects from the Class (Instance of Person)
const obj1 = new Person("Rohit", 20);
const obj3 = new Person("Nitin", 11);
// ✅ Checking Object Properties
console.log(obj1);
console.log(obj2);
console.log(obj1.name);
obj1.greet(); // Output: Hi Rohit
// -------------------------------------------------------------------
// ✅ Public, Private, and Protected Access Modifiers
class Customer {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    // ✅ Public method modifying private property
    meet() {
        this.age = this.age + 10; // Can modify private property inside class
        return this.age;
    }
}
// ✅ Creating an Instance of Customer
const P1 = new Customer("Deepak", 20, 420);
console.log(P1.name); // ✅ Allowed (public)
// console.log(P1.balance); ❌ Error: 'balance' is protected
console.log(P1.meet()); // ✅ Allowed: Modifies private 'age'
// -------------------------------------------------------------------
// ✅ Inheritance: Employee Class Extending Customer
class Employee extends Customer {
    constructor(salary, name, age, balance) {
        super(name, age, balance); // ✅ Calls Parent Constructor
        this.salary = salary;
    }
    // ✅ Overriding Parent Method
    greet() {
        console.log(this.balance); // ✅ Accessible (Protected property)
    }
    // ✅ Overriding Method from Parent
    meet() {
        console.log("Hello Coder Armu");
        return 10;
    }
}
// ✅ Creating an Employee Object
const E1 = new Employee(420, "Rohit", 20, 320);
console.log(E1.meet()); // ✅ Calls Overridden Method
console.log(E1.salary);
// -------------------------------------------------------------------
// ✅ Generics: Creating Reusable Functions
// ❌ Bad Example: Accepts multiple types but not reusable
// function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
//    return a;
// }
// ✅ Generic Function (Reusable for Any Type)
function value(a) {
    return a;
}
// ✅ Using Generics with Different Types
console.log(value(10)); // Output: 10
console.log(value("Rohit")); // Output: Rohit
console.log(value([10, 11, 12, 13])); // Output: [10, 11, 12, 13]
console.log(value(true)); // Output: true
console.log(value(["Mohan", "Rohan"])); // Output: ["Mohan", "Rohan"]
// ✅ Creating Objects with Different Generic Types
const obj10 = {
    name: "Rohit",
    age: 20,
    addhar: 123,
    salary: 23213
};
const obj11 = {
    name: "Rohit",
    age: 20,
    addhar: "32112",
    salary: 13
};
