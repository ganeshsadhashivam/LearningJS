//var ,let ,const

// var name; //Declaring a variable
// name = "ganesh";

// var name = "john";

// console.log(name);

//let

// let name = "gane";

//we cant redeclare let variable
//it can be re assigned
// let name = "kkk";

// name = "Mi";
// console.log(name);

//Const

// Cannot be redeclared
//cannot be reassigned
const name = "mumbai";
// const name = "indians";
// name = "indians";
console.log(name);

//Function Exprwssion
// const greet = function () {
//   console.log("hello");
// };

// greet();

//Arrow Functions

const greet = () => {
  console.log("i am  from Arrow function");
};

// const double = (number) => {
//   return number * 2;
// };

const double = (number) => number * 2;

const add = (a, b) => a + b;

greet();

console.log(double(5));

console.log(add(100, 5));

//conditions
//if else
const age = 18;

if (age >= 18) {
  alert("your are eligible to vote ");
} else {
  alert("your are not eligible to vote ");
}

//Ternery operator

age >= 18 ? alert("hi") : alert("bye");

//map and filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.map((number) => {
  return number * 2;
});

console.log(newArray);
console.log(numbers);

//Filter
const ages = [16, 18, 13, 12, 24, 28, 30];

const greaterThan = ages.filter((age) => {
  return age >= 18;
});

console.log(ages);
console.log(greaterThan);

//spread and Rest operator
const numb = [1, 2, 3, 4, 5, 6, 7];
const newNumb = [...numb, 4, 5, 6];

console.log(numb);
console.log(newNumb);

const person = {
  name: "ganesh",
};

const addAge = {
  ...person,
  age: 30,
};

console.log(person);
console.log(addAge);

//Rest operator
const user = (name, age, ...hobbies) => {
  console.log(name);
  console.log(age);
  console.log(hobbies);
};

user("ganesh", 30, "coding", "gym", "travel");

//destructuring

const per = ["ganesh", 30, "coding"];
console.log(per[0]);
console.log(per[1]);
console.log(per[2]);

//array desructuring

const [fname, userAge, job] = per;

console.log(fname, userAge, job);

//destructuring for objects
const people = {
  n: "gane",
  a: 31,
  j: "Developer",
};

console.log(people);

const { n, a, j } = people;
console.log(n, a, j);

//ES6
//objects,objects Constructors,thiskeyword

//ES6 Classes
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.age = age;
  }
  greet() {
    return `Hello , My name is ${this.firstName} ${this.lastName}`;
  }
}

const ganesh = new Person("gan", "nikk", 31);
console.log(ganesh.greet());
console.log(ganesh);
