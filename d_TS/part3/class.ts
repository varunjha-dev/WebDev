// ✅ Class Definition in TypeScript
class Person {
    name: string;
    age: number;

    // ✅ Constructor initializes the object properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // ✅ Method inside the class
    greet(): void {
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
    public name: string;      // ✅ Accessible Everywhere
    private age: number;      // ❌ Only Accessible Inside Class
    protected balance: number; // ✅ Accessible in Class & Subclasses

    constructor(name: string, age: number, balance: number) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    // ✅ Public method modifying private property
    meet(): number {
        this.age = this.age + 10; // Can modify private property inside class
        return this.age;
    }
}

// ✅ Creating an Instance of Customer
const P1 = new Customer("Deepak", 20, 420);
console.log(P1.name);  // ✅ Allowed (public)
// console.log(P1.balance); ❌ Error: 'balance' is protected

console.log(P1.meet()); // ✅ Allowed: Modifies private 'age'

// -------------------------------------------------------------------

// ✅ Inheritance: Employee Class Extending Customer
class Employee extends Customer {
    salary: number;

    constructor(salary: number, name: string, age: number, balance: number) {
        super(name, age, balance); // ✅ Calls Parent Constructor
        this.salary = salary;
    }

    // ✅ Overriding Parent Method
    greet(): void {
        console.log(this.balance); // ✅ Accessible (Protected property)
    }

    // ✅ Overriding Method from Parent
    meet(): number {
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
function value<T>(a: T): T {
    return a;
}

// ✅ Using Generics with Different Types
console.log(value<number>(10));       // Output: 10
console.log(value<string>("Rohit"));  // Output: Rohit
console.log(value([10, 11, 12, 13])); // Output: [10, 11, 12, 13]
console.log(value(true));             // Output: true
console.log(value(["Mohan", "Rohan"])); // Output: ["Mohan", "Rohan"]

// -------------------------------------------------------------------

// ✅ Generics with Interfaces
interface Admin<T, U> {
    name: string;
    age: number;
    addhar: T;
    salary: U;
}

// ✅ Creating Objects with Different Generic Types
const obj10: Admin<number, number> = {
    name: "Rohit",
    age: 20,
    addhar: 123,
    salary: 23213
};

const obj11: Admin<string, number> = {
    name: "Rohit",
    age: 20,
    addhar: "32112",
    salary: 13
};
