// what is objects in js

// objects in js are collection of key-value pairs each key is called property

// if it a function then we say as methords

// {}
// key : value
// Object.key or object['key']

// let student = {
//     name : "Korangu",
//     age : 18,
//     grade : "A",
// };

// console.log(student.name);
// console.log(student["grade"]);

// let student = {
//     name : "loose",
//     age: 20,
//     yearOfBirth : function(){
//         return 2025 - this.age

//     }
// }

// console.log(student.yearOfBirth());

// let students = {
//     name : "arun",
//     age:18,
//     bloodGroup:"O+"
// };

// let {name , age} = students

// console.log(name);
// console.log(age);

// console.log(students.bloodGroup);
// console.log(students.age);

// class student{
//     constructor (name, age, grade){
//         this.name = name ;
//         this.age = age;
//         this.grade =grade;
//     }
// }

// let s1 = new student("arunraj", 18, "O");
// let s2 = new student ("arunasdraj", 188, "OO+")
// console.log(s2);

// prototypes and inheritance

// class Person {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class student extends Person{
//     constructor(name , age , grade ){
//         super(name, age);
//         this.grade = grade
//     }
// }

// let s1  = new student ("ARUN", 20, "A+"  )

// console.log(s1.name,"is ", s1.age, "years old");

//  Array is a collection of values stored in a single variable

// array uses [  ]
// index of array starts with 0

// let numbers = [10 ,20 , 30 , 40, ]

// console.log(numbers[2], numbers[3]);


// common Array methords 

// let fruits = ["apple", "banana", ]

// fruits.push("orange");
// fruits.unshift("mango")
// fruits.pop();


// console.log(fruits);


// function ar (a, b){
// console.log(a+b);

// }

// let numbers = [1,2,3,4,5];
// // let doubled = numbers.map(n => n*2)
// let evens = numbers.reduce(n => n+ 1 )


// console.log(evens);



// let nums = [5,10, 15];
// let total = nums.reduce((sum , n)=> sum + n , 5)

// console.log(total);







