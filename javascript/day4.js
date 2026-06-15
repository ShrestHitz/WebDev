//1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
//it is a normal day as JS string comparisons are case sensitive


//2. Build an ATM Cash Withdrawal System
//Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
let amount = 10000001;

if (amount % 100 === 0){
  console.log("Withdrawal Successful");
}else{
  console.log("Invalid amount");
}
//Invalid amount

//3. Build a Calculator with switch-case
//Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
let a = 8;
let b = 2;
let operation = "+";

switch (operation) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  case "%":
    console.log(a % b);
    break;

  default:
    console.log("Invalid operator");
}

//4. Pay for your movie ticket
/*Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.*/

let age = 59;

if(age < 18){
  console.log("price is $3");
}else if(age >= 18 && age < 60){
  console.log("price is $10");
}else if(age >= 60){
  console.log("price is $8");
}

/*5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.*/

let month = "April";

switch (month) {
  case "March":
    console.log("Aries");
    break;

  case "April":
    console.log("Aries or Taurus");
    break;

  case "May":
    console.log("Taurus or Gemini");
    break;

  case "June":
    console.log("Gemini or Cancer");
    break;

  case "July":
    console.log("Cancer or Leo");
    break;

  case "August":
    console.log("Leo or Virgo");
    break;

  case "September":
    console.log("Virgo or Libra");
    break;

  case "October":
    console.log("Libra or Scorpio");
    break;

  case "November":
    console.log("Scorpio or Sagittarius");
    break;

  case "December":
    console.log("Sagittarius or Capricorn");
    break;

  case "January":
    console.log("Capricorn or Aquarius");
    break;

  case "February":
    console.log("Aquarius or Pisces");
    break;

  default:
    console.log("Invalid month");
}

/*6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.*/

let p = 2;
let q = 2;
let r = 3;

if(p === q && q === r){
  console.log("Equilateral triangle");
}else if(p === q || q === r || r === p){
  console.log("isosceles triangle");
}else{
  console.log("Scalene triangle");
}