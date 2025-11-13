// datatypes.ts

// CONSTANT - value cannot be changed
const appName: string = "My TypeScript App";

// LET - block scoped, value can be changed
let counter: number = 10;
counter = 20;

// VAR - function scoped (not recommended in modern TypeScript/JavaScript)
var oldStyleVar: boolean = true;

// Different Data Types
let userName: string = "Vivek";
let age: number = 30;
let isAdmin: boolean = false;
let hobbies: string[] = ["Reading", "Coding", "Music"];
let userDetails: { name: string; age: number } = {
  name: "Vivek",
  age: 30
};

// Tuple
let person: [string, number] = ["Krushnali", 1];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green;

// Any - use with caution
let randomValue: any = 10;
randomValue = "Now I'm a string";

// Union type
let userId: string | number = 123;
userId = "ABC123";

// Function with type annotations
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Output
console.log(appName);
console.log("Counter:", counter);
console.log("Old Style Var:", oldStyleVar);
console.log("Name:", userName);
console.log("Age:", age);
console.log("Admin:", isAdmin);
console.log("Hobbies:", hobbies);
console.log("User Details:", userDetails);
console.log("Person Tuple:", person);
console.log("Favorite Color:", favoriteColor);
console.log("Random Value:", randomValue);
console.log("User ID:", userId);
console.log(greet(userName));
