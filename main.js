//console.log('Hello Javascript');
//String 
let email = ‘infomasud@gmail.com’;
console.log(email);
// Concatenation 
let firstName = ‘’;
let lastName = ‘’;
let fullName = fistName+ ‘ ’ +lastName;
console.log(fullName);

//Getting characters
console.log(fullName[2]);


//String Length
console.log(fullName.length);

//Method
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


let index = email.indexOf(‘@’);
let indexOfN = email.lastIndexOf(‘n’);
let result = email.slice(2,5); //  .slice(indexNumberWhereToStart, IndexNumberWhereToStop) 
let substring = email.substr(5,10); //  .substr(indexNumberFromWhereStart, HowMuchCharacterToTake)


let replaceString = email.replace(‘m’,’w’); //  .replace(characterToFind, characterToReplaceWith)


