// break 

const scores = [50, 25, 0, 100, 20, 10];
for(let i = 0; i < scores.length; i++){


    if(scores[i] === 0){
        continue; // this statement finish current iteration and do not let execute  rest of code for this iteration but loop continue for rest of iteration 
    }


    console.log('Your score: ', scores[i]);




    if(scores[i] === 100){
        console.log('congrets, You got the  top score');
        break; // this break the loop and control flow gets out form the loop 
    }
}