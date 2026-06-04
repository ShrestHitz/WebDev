// 1. Write a function that takes a `user` as an input and greets them with their name and age

function greetuser(user){
  console.log("hello " + user.name + " You are "+ user.age + " years old.")
}

// define a user object with a name and age
let user = {
    name: "Shresth",
    age: 21
};
// calls the function `greetUser` with the user object as an input
greetuser(user); // Hello Shresth, You are 21 years old.