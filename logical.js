const password = 'pa@s';

// logical operator - OR || and AND && 


if(password.length >= 12 && password.includes('@')){
    console.log(' that password is might strong ! ');

}else if(password.length >= 8 || password.includes('@') && password.length >= 5 ){
    console.log(' that password is long enough ! ');

}else{
    console.log('Please use more longer password at least 8 character ');
}

// logical NOt ( ! )

let user = false;

if(!user){
    console.log('You must be loggen in ');
}

console.log(!true); // print false
console.log(!false); // print true

