// console.log("hello world");
// let num ="vanakkam";
// console.log(num.toUpperCase());
// try = Block of code to run
// catch = block to handle error
// finally = always run whether it error or not

// try{
//     let x=5/0;

//     console.log("result : ", x);

//      y;
//    console.log("result : ", y);
// }catch(error){
//     console.log("error Caught ",error.message);

// }finally{
//     console.log("this will always run");

// }

// function checkage(age) {
//   if (age < 18) {
//     throw "age must be 18 or above";
//   }
//   return "access granted";
// }
// try {
//   console.log(checkage(19));
// } catch (error) {
//   console.log("custom error: ", error);
// }


function divide(a,b){
    if(b===0){
        throw new Error("cannot divide by zero");
    }
    return a/b;

}
try{
    console.log(divide(4,3));
}catch(err){
    console.log("error Caught ",err.message);
}

// Example of a Syntax Error: Missing closing parenthesis
// console.log("Hello")

// Example of a Runtime Error: Trying to call a method on an undefined variable
// let obj;
// / This will throw a TypeError: Cannot read properties of undefined

// ReferenceError: Occurs when trying to access a variable that hasn't been declared.
// TypeError: Occurs when an operation is performed on a value of an inappropriate type (e.g., calling a method on null or undefined).
// let obj ={
//     name:"yetho",
//     age:21,
//     property:"onnumilla"
// }
// console.log(obj.property); // This will throw a TypeError: Cannot read properties of undefined

// RangeError: Occurs when a numeric variable or parameter is outside its valid range.
// new Array(-1); // Throws RangeError: Invalid array length
// let num =1
// num.toPrecision(50)
// console.log(num);

// let arr=new Array(1)
// console.log(arr);

// URIError: Occurs when a URI function (like decodeURI) is used incorrectly.

// try{
//     decodeURI("%")
// }catch(err){
//     console.log(err.message);

// }finally{
//     console.log("code ran good");

// }
