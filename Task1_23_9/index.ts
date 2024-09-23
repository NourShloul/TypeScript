/////////     (Q1) Identify if a Number is Even or Odd with User Input
let num: number = 9;
let result: string = num % 2 == 0 ? "Even" : "Odd";
console.log(`The number ${num} is ${result}.`);

////////       (Q2) Filter Expensive Products from an Array
let productPrices: number[] = [100, 200, 50, 300, 150];
let thresholdPrice: number = 150;

console.log("Expensive Products:");
for (let price of productPrices) {
  if (price > thresholdPrice) {
    console.log(price);
  }
}

/////// (Q3) Find the Oldest Admin

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

let users: User[] = [
  { name: "Alice", age: 30, isAdmin: true },
  { name: "Bob", age: 25, isAdmin: false },
  { name: "Charlie", age: 35, isAdmin: true },
  { name: "David", age: 28, isAdmin: false },
];

let oldestAdmin: User | null = null; // Specify the type as User or null

for (let user of users) {
  if (user.isAdmin && (oldestAdmin === null || user.age > oldestAdmin.age)) {
    oldestAdmin = user;
  }
}

if (oldestAdmin) {
  console.log(
    `The oldest admin is ${oldestAdmin.name}, age ${oldestAdmin.age}.`
  );
} else {
  console.log("No admin found.");
}
