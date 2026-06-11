/*1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
*
* *
* * *
* * * *
* * * * * */

for(let i = 1; i <= 5; i++){
  let row = "";

  for(let j = 1; j <= i; j++){
    row += "* ";
  }
  console.log(row);
}

/*. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30 */

let n = 3;
for(i =1; i <= 10; i++){
  console.log(n, " * ",i ,"=" ,(n * i));
}

/*3. Find the summation of all odd numbers between 1 to 500 and print them on the console log. */

let sum = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log(sum);

/*4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.*/

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}

/*5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

Input: 6789
Output: 9876 */

let num = 6789;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(reversed);