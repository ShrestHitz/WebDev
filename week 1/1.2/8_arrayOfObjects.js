// 1. Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function getUsers(users){

  let adultUsers = users.filter((user) => user.age > 18);

  return adultUsers;
}

let users = [
  { name: "Shresth", age: 21 },
  { name: "Deepak", age: 17 },
  { name: "John", age: 27 },
  { name: "Raj", age: 15 },
  { name: "Niraj", age: 20 },
];

// calls the function `getAdultUsers` with the array of users as an input
console.log(getUsers(users));