///////q1 : sum of array
function Sum(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        sum += num;
    }
    return sum;
}
var array = [1, 2, 5, 40, 8];
var totalSum = Sum(array);
console.log("The sum of the array is: ".concat(totalSum));
///////q2 : is all element in the array posite or not
function areElementsPositive(array2) {
    for (var _i = 0, array2_1 = array2; _i < array2_1.length; _i++) {
        var num = array2_1[_i];
        if (num <= 0) {
            return false;
        }
    }
    return true;
}
var numbers = [-1, 20, 3, -4, 80];
if (areElementsPositive(numbers)) {
    console.log("All Positive");
}
else {
    console.log("Not All Positive");
}
///////q3 : the longest name in an array
function findLongestName(names) {
    var longestName = "";
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (name_1.length > longestName.length) {
            longestName = name_1;
        }
    }
    return longestName;
}
var names = ["Nour", "Rashid", "Mohammad", "salsabeel"];
var longestName = findLongestName(names);
console.log("The longest name is: ".concat(longestName));
///////q4 : how much time the caracher repeate in the string
function countCharacterOccurrences(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
var exampleString = "I am so happy, o_o";
var characterToCount = "o";
var occurrences = countCharacterOccurrences(exampleString, characterToCount);
console.log("The character '".concat(characterToCount, "' appears ").concat(occurrences, " times in the string."));
///////q5 : Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function findPrimeNumbers(numbers) {
    var primeNumbers = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    }
    return primeNumbers;
}
var array2 = [2, 5, 6, 7, 8, 9, 10];
var primes = findPrimeNumbers(array2);
console.log("Prime numbers in the array: ".concat(primes.join(", ")));
