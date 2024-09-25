///////q1 : sum of array
function Sum(array: number[]): number {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}
let array: number[] = [1, 2, 5, 40, 8];
let totalSum = Sum(array);
console.log(`The sum of the array is: ${totalSum}`);

///////q2 : is all element in the array posite or not
function areElementsPositive(array2: number[]): boolean {
  for (let num of array2) {
    if (num <= 0) {
      return false;
    }
  }
  return true;
}
let numbers: number[] = [-1, 20, 3, -4, 80];
if (areElementsPositive(numbers)) {
  console.log("All Positive");
} else {
  console.log("Not All Positive");
}

///////q3 : the longest name in an array
function findLongestName(names: string[]): string {
  let longestName = "";
  for (let name of names) {
    if (name.length > longestName.length) {
      longestName = name;
    }
  }

  return longestName;
}

let names: string[] = ["Nour", "Rashid", "Mohammad", "salsabeel"];
let longestName = findLongestName(names);
console.log(`The longest name is: ${longestName}`);

///////q4 : how much time the caracher repeate in the string
function countCharacterOccurrences(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
let exampleString: string = "I am so happy, o_o";
let characterToCount: string = "o";
let occurrences = countCharacterOccurrences(exampleString, characterToCount);
console.log(
  `The character '${characterToCount}' appears ${occurrences} times in the string.`
);

///////q5 : Function to check if a number is prime
function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
function findPrimeNumbers(numbers: number[]): number[] {
  let primeNumbers: number[] = [];

  for (let num of numbers) {
    if (isPrime(num)) {
      primeNumbers.push(num);
    }
  }
  return primeNumbers;
}
let array2: number[] = [2, 5, 6, 7, 8, 9, 10];
let primes = findPrimeNumbers(array2);
console.log(`Prime numbers in the array: ${primes.join(", ")}`);
