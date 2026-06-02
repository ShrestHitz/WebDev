function assign (arr){
  for (let user of arr) {
  if(user.age > 18 && user.gender == "Male"){
    console.log(user);
  }
}
}

const user = [{
  name: "Shresth",
  age: 22,
  gender: "Male",
}, {
  name : "priya",
  age: 21,
  gender: "Female"
}];

console.log(assign(user));