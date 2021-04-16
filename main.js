// Math operators are  +,  -, * , / , **, % 
let radius = 5; 
const pi  = 3.14;
console.log(10/2);

let result = radius % 3; // The % operator returns the remainder after division task performed 
let area = pi * radius**2;
// Order of operation in Math calculation 
// B -- Brackets 
// I – Indices 
// D – Division 
// M – Multiplication 
// A – Addition 
// S – Subtraction 

let result = 5 * (25 -5)**3 ;
console.log(result);

//sorthand
let likes = 10;

// likes = likes + 1 ;
// likes++;  
// console.log(likes);

// likes--;  
// console.log(likes);


// likes += 10;  
// console.log(likes);


likes -=5; // console.log(likes);
likes *= 2; // console.log(likes);

// NaN = Not a number 
// console.log(  5/ ‘hi’); // output NaN
//Concatenation string and number 
console.log(‘You have ’+ likes + ‘ likes on your post’);
//Template string way 
const title = ‘Best read of 2020’;
const author =’Robert’;
const likes = 30;
let result = `This blog called ${title} by ${author} has ${likes} likes`;
console.log(result);
// creating HTML template
let html = `<h2>${title}</h2><p>${author}</p>`;
console.log(html);



