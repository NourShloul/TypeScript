/////////     (Q1) Identify if a Number is Even or Odd with User Input
var num = 9;
var result = num % 2 == 0 ? "Even" : "Odd";
console.log("The number ".concat(num, " is ").concat(result, "."));

////////       (Q2) Filter Expensive Products from an Array
var productPrices = [100, 200, 50, 300, 150];
var thresholdPrice = 150;
console.log("Expensive Products:");
for (
  var _i = 0, productPrices_1 = productPrices;
  _i < productPrices_1.length;
  _i++
) {
  var price = productPrices_1[_i];
  if (price > thresholdPrice) {
    console.log(price);
  }
}
var users = [
  { name: "Alice", age: 30, isAdmin: true },
  { name: "Bob", age: 25, isAdmin: false },
  { name: "Charlie", age: 35, isAdmin: true },
  { name: "David", age: 28, isAdmin: false },
];
var oldestAdmin = null; // Specify the type as User or null
for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
  var user = users_1[_a];
  if (user.isAdmin && (oldestAdmin === null || user.age > oldestAdmin.age)) {
    oldestAdmin = user;
  }
}
if (oldestAdmin) {
  console.log(
    "The oldest admin is "
      .concat(oldestAdmin.name, ", age ")
      .concat(oldestAdmin.age, ".")
  );
} else {
  console.log("No admin found.");
}
