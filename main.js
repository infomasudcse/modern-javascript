// object 

let user = {
    name : 'Masud',
    email : 'infomasud@gmail.com',
    location : 'Dhaka',
    blogs : ['lorem ispam', 'bello bla'],
    login : function(){
        console.log(' the user logged in');
    },
    logout: function(){
        console.log('the user logged out ');
    },
    logBlogs: function(){

        console.log('the user has following blogs');
        this.blogs.forEach(blog=>{
            console.log(blog);
        })
    }

}

console.log(user.name);


user.logBlogs();