// callback function  & foreach

let people = ['azim', 'maruf', 'mollik', 'badol','Kalam', 'masud'];

// people.forEach(person => {
//     console.log(person);
// });

// people.forEach( (person, index) => {
//        console.log(index, person);
//      });


//use as callback 
// const logPerson = (person, index)=> {
//        console.log(index, person); 
// }
// people.forEach(logPerson);

//output to browser using refrence 
const ul = document.querySelector('.people');
let html =``;
people.forEach(person => {
    html += `<li> ${person}</li>`;
});

ul.innerHTML =  html;