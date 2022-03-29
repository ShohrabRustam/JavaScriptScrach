function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

    // we can add the property in function like object 
    hello . myOwnProperty="very unique value ";

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";

hello.prototype.sing = function(){
    return "lalalla";
};

console.log(hello.prototype.sing());

console.log ("only function provide the proto type property ");

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    console.log ("Hello I am singing ");
    
};
