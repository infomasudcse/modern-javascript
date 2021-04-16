
// Undefined
let year ;
console.log(year, year + 2, `The year is ${year}`);
// Null
let myAge = null; 
console.log(myAge, myAge + 2, `The year is ${myAge}`);

// Boolean
console.log(true);
console.log(flase);

//Methods can return boolan
let email = ‘masud@infomasud.com’;
let result = email.includes(‘@’);
console.log(result);

let names = [‘Karim’,’Masud’,’Alam’];
let results = names.includes(‘Masud’);
console.log(results);
// comparison operators 
let age = 30;
console.log(age == 30);
console.log(age == 25);
console.log(age != 30);
console.log(age != 25);
console.log(age > 25);
console.log(age  < 25);
console.log(age  <= 30);
console.log(age >= 30);

let name = ‘karim’;
console.log(name  ==  ‘karim’);
console.log(name  ==  ‘Karim’);
console.log(name  > ‘abdul’);
console.log(name  >  ‘Alam’);


//Comparison

//loose comparison
let age = 30;
console.log(age == 30);
console.log(age == ‘30’);
console.log(age != 30);
console.log(age != ‘30’);


// strict comparison
console.log(age === 30);
console.log(age === ‘30’);
console.log(age !== 30);
console.log(age !== ‘30’);


// Type Conversion

let score =  ‘100’;
console.log(score + 1);
score = Number(score);
console.log(score + 1)
console.log( typeof score); //get variable type


let agee = 30;
agee = String(30);
console.log(agee, typeof agee);

