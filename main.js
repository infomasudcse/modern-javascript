// funciton declaration 

// function greet(){
//     console.log('Hello There');
// }


// greet();



// funciton expression 

// const speak = function(){
//     console.log('Good Day');
// }

// speak();


// arguments and parameters 

// const ciao = function(name ='Luigi', time='night'){
//     console.log(`Good ${time} ${name}`);
// }
// arguments order is important 

//ciao();

//arraow function 

// const greet = () => 'Hello World';
// const result = greet();
// console.log(result);

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i< products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;

};

console.log(bill([10,15,20], 0.2));


