var person1 = {
    name: "John",
    age: 20,
};
if (person1.age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
var teacher1 = {
    name: "Nour",
    subjects: ["Math", "Science", "Arabic"],
};
console.log("Teacher: ".concat(teacher1.name));
teacher1.subjects.forEach(function (subject) { return console.log(subject); });
var products = [
    { name: "Laptop", price: 1000, quantity: 3 },
    { name: "Phone", price: 500, quantity: 10 },
    { name: "Tablet", price: 300, quantity: 7 },
];
products.forEach(function (product) {
    if (product.quantity > 5) {
        product.price *= 1.1;
    }
});
products.forEach(function (product) {
    console.log("".concat(product.name, ": $").concat(product.price.toFixed(2)));
});
var device1 = {
    name: "Printer",
    start: function () { return console.log("Printer is starting..."); },
};
var device2 = {
    name: "Monitor",
};
function startDevice(device) {
    if (device.start) {
        device.start();
    }
    else {
        console.log("".concat(device.name, " starting with default settings."));
    }
}
startDevice(device1);
startDevice(device2);
