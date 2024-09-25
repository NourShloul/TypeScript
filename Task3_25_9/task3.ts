//Task 1: Verify Interface Properties
interface Person {
  name: string;
  age: number;
}
const person1: Person = {
  name: "John",
  age: 20,
};
if (person1.age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//Task 2: Iterate Through an Array in an Interface
interface Teacher {
  name: string;
  subjects: string[];
}
const teacher1: Teacher = {
  name: "Nour",
  subjects: ["Math", "Science", "Arabic"],
};
console.log(`Teacher: ${teacher1.name}`);
teacher1.subjects.forEach((subject) => console.log(subject));

//Task 3: Modify Object in an Array of Interfaces
interface Product {
  name: string;
  price: number;
  quantity: number;
}
const products: Product[] = [
  { name: "Laptop", price: 1000, quantity: 3 },
  { name: "Phone", price: 500, quantity: 10 },
  { name: "Tablet", price: 300, quantity: 7 },
];
products.forEach((product) => {
  if (product.quantity > 5) {
    product.price *= 1.1;
  }
});
products.forEach((product) => {
  console.log(`${product.name}: $${product.price.toFixed(2)}`);
});

//Task 4: Validate Optional Function in Interface with Default Behavior
interface Device {
  name: string;
  start?: () => void;
}
const device1: Device = {
  name: "Printer",
  start: () => console.log("Printer is starting..."),
};
const device2: Device = {
  name: "Monitor",
};
function startDevice(device: Device) {
  if (device.start) {
    device.start();
  } else {
    console.log(`${device.name} starting with default settings.`);
  }
}
startDevice(device1);
startDevice(device2);
