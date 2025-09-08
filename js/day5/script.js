// for loop 
//syntax
// for (initilization; condition; increment/decrement) {

// }

// for (let i = 1; i<0 ; i+= 2 ){
//     console.log("count: "+  i);   
// }



// let i = 1;

// while (i <= 0){
//     console.log("count: "+  i);
//     i++;
// }






// do while 



//  let j = 1;
//  do{
//     console.log("do while loop count: "+  j);
// j ++; 
// }while (j <= 7);


// for..in loop

// const person = {
//     name : "thiyagu",
//     age: 22,
//     city: "chennai"
// };

// for (let oi in person ){
//     console.log(oi + " : " + person[oi]);
// }



// const lkjhsadfh = [10,20,30,40,50];

// for (let num of lkjhsadfh  ){
//     console.log(num);
    
// }



// for (let char of "hello"){
//     console.log(char);
// }




// for == run known number of iterations 
// while == repeat until condition is false 
// do..while == like while but it runs at lest once 
// for .. in == loos over object properties 
// for..of == loops over iterables (array , string , sets, map) 





const people = [
  { name: "Thiyagu", age: 22, city: "Chennai" },
  { name: "Priya", age: 25, city: "Mumbai" },
  { name: "Karthik", age: 28, city: "Bangalore" },
  { name: "Anjali", age: 21, city: "Delhi" },
  { name: "Rahul", age: 30, city: "Hyderabad" },
  { name: "Sneha", age: 27, city: "Pune" },
  { name: "Vikram", age: 24, city: "Kolkata" },
  { name: "Aishwarya", age: 26, city: "Chennai" },
  { name: "Arjun", age: 29, city: "Jaipur" },
  { name: "Meera", age: 23, city: "Lucknow" }
];




// const onePerson =people[5];








// console.log(onePerson);

// for (let key in onePerson) {
//   console.log(key + " : " + onePerson[key]);
// }


// for (let person of people ){
//     for (let key in person ){
//         console.log(key + " :" + person[key]);
        
//     }
    


// people.forEach((person, index)=> {
//     if(index === 6){
//         for (let key in person) {
//             console.log(key + " : " + person[key]);
//         }   
//     }
// })





