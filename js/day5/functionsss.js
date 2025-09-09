// 1 Functions Declaring  (Nested Function )

function greet (){
    console.log("Hello Everyone");
}
greet();


// 2 function with parameters

function greetUser(name){
    console.log("Hello " + name + "!");
}

greetUser("Thiyagu");
greetUser("Kumar");
greetUser("Revi");


// 3 function with return type or value


function add (a , b){
    return a + b;
}
let result = add(10, 20);
console.log(result);


// 4 function with expression  (Anonymous Function)
// you can assign a function to a variable 

// const y = 4
// const x = y ;


const multiply = function(x , y){
    return x*y;
}
console.log(multiply(4,5));



// 5 Arrow Function 
  

const divide = (a,b) => a/b;

console.log(divide(20,2));





// 6 Default Parameters


function greetUser1(name = "Guest Nayae"){
    console.log("Hellooooo "+ name + "!");
}

greetUser1()