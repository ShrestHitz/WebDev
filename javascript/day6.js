/*1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit */

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(25));  // 77
console.log(celsiusToFahrenheit(100)); // 212

/* 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well. */

function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(findMax(10, 20));   // 20
console.log(findMax(-5, -2));   // -2
console.log(findMax(7, 7));     // 7

/* 3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far. */

function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

/*4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1 */

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5)); // 120

/* 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string. */

function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("javascript")); // 3