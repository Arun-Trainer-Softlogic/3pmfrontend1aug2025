// DOM In JS 


// 1.	Document Properties



console.log(document.title);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.scripts);



let element = document.getElementById("ar")

let gelament = document.getElementById("example")

console.log(element);

// Love@2025

// 2.	Element Node Properties

console.log(element.id);
console.log(element.className);
console.log(element.tagName);  
console.log(element.innerHTML); 
console.log(element.innerText);
console.log(element.textContent);

console.log(gelament.attributes);
console.log(gelament.parentNode);


// 3.	Form Element Properties


let input = document.querySelector("#username")

let checkbox = document.querySelector("#subscribe")

console.log(input.type);
console.log(input.checked);
console.log(input.disabled);
console.log(input.placeholder);
console.log(input.name);


console.log(checkbox.value);
console.log(checkbox.type);
console.log(checkbox.disabled);
console.log(checkbox.placeholder);

// 4.	Window / Screen Properties

 
console.log(window.outerWidth);
console.log(window.navigator.userAgent);

console.log(history.length);








// 5.	Style Properties

let box = document.getElementById("box")

box.style.color = "red";
box.style.backgroundColor = "skyblue"
box.style.fontSize = "40px"





