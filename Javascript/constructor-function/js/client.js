function User (userName){
    console.log(this);
}


function User1 (userName){
    console.log(this);
}

var userWithConstructorFunction = new User ("mahesh");

//when we do NEW user then javasctipt creates its own scope , i.e this and return that object


var userWithOutConstructorFunction =  User1 ("mahesh");

//here , it is window