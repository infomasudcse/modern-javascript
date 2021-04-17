// callback function  & foreach

let people = ['azim', 'maruf', 'mollik', 'badol'];

// people.forEach(person => {
//     console.log(person);
// });

// people.forEach( (person, index) => {
//        console.log(index, person);
//      });


//use as callback 
const logPerson = (person, index)=> {
       console.log(index, person); 
}
people.forEach(logPerson);