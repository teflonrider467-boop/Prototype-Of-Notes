// Asynchronous

import { log } from "console";
import { CLIENT_RENEG_WINDOW } from "tls";

// Ques 1
console.log("1");
console.log("2");
setTimeout(() => {
  console.log("3");
}, 1000);
setTimeout(() => {
  console.log("4");
}, 5000);
console.log("5");
// Output: 1, 2, 5, 3, 4
// Logic :-
// Every Browser has a JavaScript Engine which converts our JavaScript code into Machine Code
// JS source code -> Parser -> Abstract Syntax Tree -> Interpreter Ignition -> ByteCode -> <-----------|
//                                                     |->Compiler TurboFan -> Optimized Machine Code -|
// There Job is to execute our Synchronous JavaScript Code
// But here we have Asynchronous Code `setTimeOut`
// We also have a Concept called JavaScript Runtime which executes JavaScript asynchronous Code
// In JS Engine we have a Memory Heap which stores Variables and their values
// then we have a CallStack which keeps the Functions or Task in a Stack
// Our Asynchronous Code is executed by Web API, window Object is part of our Web API that contains fetch, find, setTimeout, etc..

// When CallStack encounters an Asynchronous Function it sends it to Web API
// Web API will process that function and will push it to Callback Queue
// CallBack Queue has something called Event Loop attached to it which checks if the CallStack is Empty
// Our code is already executes but needs to be pushed to CallStack from CallBack Queue so that our JS Engine can do whatever with its result
// Hence even if setTimeout was processed way before `console.log("5");` it has to wait before our CallStack executes all the synchronous code

// Ques 2
function removeItem() {
  removeItem();
}
removeItem();
// Adding an async method like setTimeout will remove the CallStack error

// Hoisting
// Ques 3
console.log(name);
var name = "Code for Interview";

// output: undefined
// When we execute a code two phases happen
// Development Phase, when we declare our variables and functions, and Execution Phase
// When JS sees there is a variable declared during execution, it will send that declaration to the top of the code and assign it to undefined
// This is called Hoisting

// Ques 4
console.log(name);
const name = "Code for Interview"; // or let

// output: Error

// Ques 5
var name = "Code for Interview";
var name = "Another name";
console.log(name);

// output: Another name
// No error for reDeclaration

// Ques 6
var name = "Code for Interview";
let name = "Another name";
console.log(name);

// output: Error
// reDeclaring the variable let is creating error

// Ques 7
let name = "Code for Interview";
let name = "Another name";
console.log(name);

// output: error

// Ques 8
console.log(name());
function name() {
  console.log("Hello");
}
// Output: Hello
//       : undefined (returned from function)
// Hoisting works different with function
// Hoisting is of two types: Partially(variables) and Fully(functions)
// Partially is moving it to top and assigning it to undefined
// Fully is moving it to top and assigning it to its actual value

// Ques 9
console.log(name());
(function name() {
  console.log("Hello");
});
// Output: name() is not defined
// Because for Hoisting the first keyword should be function

// Ques 10
console.log(name());
var name = () => {
  console.log("Heloo");
};
// Output: name() is not defined
// still the first keyword is not function hence no Hoisting

// Ques 11
console.log(name());
function name() {
  console.log("Hello");
}
console.log(name());
function name() {
  console.log(" not Hello");
}
// Output: not hello not hello
// first name function gets assigned to print hello but due to Hoisting it gets reAssigned to print not hello

// Execution Context
// Execution Context is an Environment where our JS code is executed
// At a time one execution context of our is being executed
// There are two types of execution context, 1.) Global and 2.) Function
// Whenever we execute a JS then a Global Execution Context gets created and all our Global variables and Function gets executed in it
// Whenever a function is encountered then every function has its own execution Context
// Ques 12
function returnName() {
  console.log("2", name);
}
console.log("1", name);
var name = "Code for Interview";
returnName();
// Output : 1, undefined   2, Code for Interview
// Because every statement other than function comes in Global Execution Context and gets executed first
// function comes in Function Execution Context
// when console.log('2', name); gets hit, it checks if name is defined in function context, when it doesn't find anything it checks Global Execution Context
// There it finds the declared as Global Execution Context has finished executing and the value of name has been assigned

// Ques 13
function returnName() {
  name = "Code for Interview";
}
returnName();
console.log(name);
// Output : Code for Interview
// Javascript sees name is being assigned(not declared) to some value, it goes to Global execution context to see if name was declared
// When it finds that name is not declared then it assigns the value to undefined, followed by assigning the value to "Code for Interview"
// then it logs Code for Interview

// Ques 14
function returnName() {
  name = "Code for Interview";
}
returnName();
console.log(name);
// Output : Code for Interview

// Ques 15
var name = "Code for Interview";
function returnName() {
  console.log(name);
  var name = "Ayushmann khurana";
  console.log(name);
}
returnName();
// Output : Undefined \n Ayushmann Khurana
// Global Execution Context runs and assign name as undefined followed by assigning it as Code for Interview
// returnName() gets triggered
// returnName Function Executable Context gets created
// Global Executable Context has it's own Hoisting anf Function Executable Context has its own hoisting
// Function Executable Context sees name declared and assigns it to the top of Function Executable Context as undefined
// it then prints undefined
// then it assigns the value Ayushmann Khurana
// then it again prints name, which now has the value of Ayushmann Khurana
// Until and Unless the variable is not declared in the Function Executable Context, it will not see the Global Executable Context for reference

// Arguments
// Ques 16
function information(name, channel) {
  console.log(arguments);
}
information("Code For Interview", "Youtube Channel");
// Output: {'0' : "Code for Interview", '1' : "Youtube Channel"}
// arguments keyword creates an array of objects consisting of arguments that are passed when function gets called
// It is great when there are 100's of arguments
// Although arguments is an array it does not support array methods such as push pop

// Ques 17
function information(name, channel) {
  console.log("Function :", arguments === this);
}
console.log("Global :", window === this);
information("Code For Interview", "Youtube Channel");
// Output: Global : true, Function : false
// Global Execution Argument as soon as it executes gives us two objects, `window` and `this`
// Function Execution Argument as soon as it executes gives us two objects, `arguments` and `this`
// Global Execution Context does not provide us `arguments` keyword
// It is best to ignore `arguments` keyword and instead use JS rest operator

// NodeJS provide us with a set of async I/O
// These I/O cannot be processed from JavaScript and hence is processed by NodeJS
// Callback Queue consist of MacroTaskQueue and MicroTaskQueue
// Callback are synchronous part of asynchronous function that get executed after the asynchronous part

// Is nodeJS Multithreaded

// Variable Environment and Scope Chain
// Ques 18
function one() {
  console.log(name);
}

function two() {
  var name = "Code for Interview";
  one();
}

var name = "Ayushmaan Khurana";
two();
// Output: "Ayushmaan Khurana"
// We know that when the above code executes we have something called a Global Execution Context and Function Execution Context
// In Global Execution Context we have something called `Variable Environment` where our name variable will be declared
// Similarly in Functional Execution Context we have `Variable Environment` where our name variable will be declared
// But in function one() we have no variable declared
// when our code encounters var name = "Ayushmaan Khurana", it will Hoist it and make name = undefined, Now when it sees name = Ayushmann Khurana, it will assign `name` the value of "Ayushmaan Khurana" in our Variable Environment
// then it calls the function two(); where it sees var name = "Code for Interview";, therefore name gets hoisted in function Execution Context, that is, name = undefined, then it encounters name = "Code for Interview", hence `name` will have a value of "Code for Interview", in the Variable Environment of Functional Execution Context of two();
// then it calls the function one(); where it sees it needs to print `name`, it will first check if there is a declaration of `name` in it's own context so that it can store it in its own variable Environment, but there is none, so it will refer to Global Execution Context, where name = "Ayushmaan Khurana"

// Ques 19
function two() {
  var name = "Code for Interview";
  return function one() {
    console.log(name);
  };
}

var name = "Ayushmaan Khurana";
two();
// Output : function one(){ console.log(name);}
// This is because that is what two(); is returning, function one() is not being called it is being returned, one() is defined inside the Functional Execution Context of two()

// Ques 20
function two() {
  var name = "Code for Interview";
  return function one() {
    console.log(name);
  };
}

var name = "Ayushmaan Khurana";
two()();
// Output : "Code for Interview"
// This is because now instead of returning it is executing one(), and one() because it is defined in two(), it will look for the reference in the Variable Environment of two()

// Lexical Environment, Scope and Scope Chain
// The above Question 19 and 20 we saw how one() picks up the value from two() and not from the Global Execution Context
// We also saw in Ques 18 how one() picked value from Global Execution Environment and not from two()
// This heterogenous behavior occurs due to Lexical Environment, which tells us that in which environment is our function written in
// In ques 18 our one() and two() Function is written in Global Environment, our Scope Chain points to Global Execution Context
// In ques 19 and 20 our one() Function is written in two() Environment, our Scope Chain points to two() Functional Execution Context, if it doesn't find the variable in two it will search in Global because that's where two() is written
// A Scope Chain refers to where the scope of our function or variable is

//  Function Scope and Block Scope
// We have two scopes: Block Scope(When we add curly braces those curly braces is considered as block scope) and Function Scope
// Languages such as C, C++, Java works on Block Scope
// But JavaScript works on Function Scope, that is, our if statements and our for statements won't create any Execution Context

// Ques 21
if (true) {
  var name = "Code for Interview";
}
console.log(name);
// Output: Code for Interview

// Ques 22
function first() {
  var name = "Code for Interview";
}
first();
console.log(name);
// Output: name is not defined

// Ques 23
if (true) {
  let name = "Code for Interview";
}
console.log(name);
// Output: name is not defined, because let and const respect Block Scope

// Global Namespace and IIFE(Immediately Invoked Function Expression)
// In this we will explore the concept of Polluting the Global Variables
// Lets say we have two javaScript File in which we have `name` variable declared Globally, then the JavaScript file called later will replace the the value of `name` which can create confusion when debugging JavaScript file included above
// This concludes that until and unless its extremely necessary we should not declare Global variables
// We also have very limited memory and our Global variables will exist throughout the application, which can also result in memory leak
// IIFE is a concept that came in to prevent the Global variables
// IIFE is a function that calls itself
// Normal function :-
function name() {
  return "Code For Interview";
}
name();
// IIFE :-
(function name() {
  return "Code For Interview";
})();
// OR
(function name() {
  return "Code For Interview";
})();
// Now to prevent Global variable Pollution, we can store IIFE in a variable, hence no matter the amount of values we get the variable storing it will always be one
var script = (function name() {
  return "Code For Interview";
})();
script; // Output : Code for Interview

// A good example of IIFE
var script = (() => {
  return {
    name: "Hardik Singh",
    phone: 12121112121,
    email: "ah@gmail.com",
  };
})();
script.email;
script.name;
script.phone;

// this keyword
// `this` is an object that a function is a property of.
function name() {
  console.log(this);
}
name();
// Output: window{}
// In more simple terms `this` points to the object that calls the function, in the above example it is the window object
// declaring anything globally gets attached to the window object which then calls it
// window.name() === name()
// looking at window.name() will make the definition of this more clear, name() function is property of window object
const obj2 = {
  name: function () {
    console.log(this);
  },
};
obj2.name();
// Output: {name: f}
// `this` keyword helps us heavily in code reusability
const obj5 = {
  name: "Hardik",
  getName() {
    return this.name;
  },
  getYoutubeChannelName() {
    return this.getName;
  },
};
// In GEC(Global Execution context this === window), In FEC this === arguments
// Ques 24
const obj = {
  name: "Code for Interview",

  getName() {
    const name = "Ayushmaan Khurana";
    return this.name;
  },
};
obj.getName();
// Output: "Code for Interview", because this returns {name: "Code for Interview", getName :f} hence this.name returns "Code for Interview"
// Ques 25
const obj3 = {
  getName() {
    const name = "Ayushmaan Khurana";
    return this.name;
  },
};
obj3.getName();
// Output: undefined, because this returns { getName :f} hence this.name returns undefined
// Ques 26
const obj4 = {
  name: "Code for Interview",

  getName() {
    const name = "Ayushmaan Khurana";
    return name;
  },
};
obj4.getName();
// Output: "Ayushmaan Khurana", because obj4 returns {name: "Code for Interview", getName :f} hence obj4.getName returns "Ayushmaan Khurana"

// Dynamic Lexical Scoping
// Ques 27
const obj6 = {
  getname() {
    console.log("getname", this);
    function getYoutubeChannelName() {
      console.log("Youtube", this);
    }
    return getYoutubeChannelName();
  },
};
obj6.getname();
// Output: getname {getname :f} Youtube {window}, this is because it follows a opposite of lexical scoping(it matters where your function is defined not where it is called)
// Ques 28
const obj7 = {
  name: "Code for Interview",
  getname() {
    console.log("getname", this);
    function getYoutubeChannelName() {
      console.log("Youtube", this);
    }
    return getYoutubeChannelName.bind(this);
  },
};
obj7.getname()();
// Output: getname {getname : f} Youtube {getname : f}, because now it is being lexically scoped
// we could also use arrow function which by default lexically scope this, instead of bind

// Call, Apply and bind
function getname() {
  return "Code for Interview";
}
getname();
// what javascript does is
getname.call();
// both result in same output

const obj8 = {
  name: "Hardik",
  getName() {
    return this.name;
  },
};
obj8.getName();
// Output: Hardik
// Now I define a function in obj9 but want to access it in obj10, here call bind apply comes into play
const obj9 = {
  name: "Hardik",
  getName(a, b) {
    return this.name + a + b;
  },
};
const obj10 = {
  name: "Code for Interview",
};
obj9.getName.call(obj10, "Youtube", "Channel");
// Output: Code for Interview Youtube Channel
const obj11 = {
  name: "Hardik",
  getName(a, b) {
    return this.name + a + b;
  },
};
const obj12 = {
  name: "Code for Interview",
};
obj11.getName.apply(obj12, ["Youtube", "Channel"]);
// apply takes an array as an arguement
const obj13 = {
  name: "Hardik",
  getName(a, b) {
    return this.name + a + b;
  },
};
const obj14 = {
  name: "Code for Interview",
};
var returnedFunction = obj13.getName.bind(obj14, "Youtube", "Channel");
// bind returns a function that we can store in a variable

// Everything in Javascript is an Object
// Ques 29
function getName() {
  return "Code for Interview";
}

getName.insta = "Username: codeforinterview";

console.log(getName.insta);
// usually we cannot assign a property to a function, and the above code semantically should give us error, or null, or undefined
// but that won't be the case in javascript, and our Output: Username: CodeForInterview
// because everything in javascript is an object, even functions are objects in JS
// we also get questions like why JAVA is not 100% Object Oriented Programming Language
// that is because in JAVA we have 8 primitive data types that are not objects
console.log(typeof 10); // number
console.log(typeof "Code for Interview"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol("Code for Interview")); //symbol
console.log(typeof null); // object, this is a mistake admitted by brendan Eich himself
console.log(typeof []); // object
console.log(typeof function () {}); // function, because function are a specific type of Object in JS with added capability of being callable, above we learned functions are actually called like functionName.call()
// similarly with array we do arrayName.length, as length property is attached to array[] object
// Ques 30
console.log(true.toString()); // Output: "true"
// primitive data types have  a wrapper around them
// what got executed was Boolean(true).toString()

// Call By Value and Call by Reference
// we know that everything in JS is an Object
// we have Primitive and Non-Primitive Data types
// We have 7 Primitive types of data types in JS:Number, Boolean, String, undefined, null, objects, symbol
// We have 2 Non-Primitive Data type in JS: functions and Arrays
// Now we'll see which one of them are pass by Values and which are pass by Reference
// But before we need to know what is pass by value and pass by reference
// let there be two variables
let a = 10;
let b = a;
b++;
console.log(a);//Output: 10
console.log(b);//Output: 11
// The value of `a` does not change because a was `passed by value` in b
{
  let obj1 = {
  name: "Ayushmaan Khurana"
  }
  let obj2 = obj1;
  obj2.phone = 88888888;
  console.log(obj2);//Output: {name: "Ayushmaan Khurana", phone: "8888888"}
  console.log(obj1);//Output: {name: "Ayushmaan Khurana", phone: "8888888"} 
}
// here we see that obj1 gets mutated because obj1 was `passed by reference` in obj2
// using Object.assign will overcome this error
{
  let obj1 = {
    name: "Ayushmaan Khurana"
  }
  let obj2 = Object.assign({}, obj1);
  obj2.phone =88888888;
  console.log(obj2);//Output: {name: "Ayushmaan Khurana", phone: "8888888"}
  console.log(obj1);//Output: {name: "Ayushmaan Khurana"}
}
// but modernly we use spread operators
{
  let obj1 = {
    name:"Ayushmaan Khurana"
  }
  let obj2 = {...obj1};
  obj2.phone =88888888;
  console.log(obj2);//Output: {name: "Ayushmaan Khurana", phone: "8888888"}
  console.log(obj1);//Output: {name: "Ayushmaan Khurana"}
}
// We have the same case with arrays, arrays are also called by reference
{
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = arr1;
  arr2.push(6);
  console.log(arr2);//Output: [1, 2, 3, 4, ,5, 6]
  console.log(arr1);//Output: [1, 2, 3, 4, ,5, 6]
}
// we can again overcome this issue using .concat()
{
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [].concat(arr1);
  arr2.push(6);
  console.log(arr2);//Output: [1, 2, 3, 4, ,5, 6]
  console.log(arr1);//Output: [1, 2, 3, 4, ,5]
}
// or we can again use spread operator
{
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [...arr1];
  arr2.push(6);
  console.log(arr2);//Output: [1, 2, 3, 4, ,5, 6]
  console.log(arr1);//Output: [1, 2, 3, 4, ,5]
}

// Type Coercion, the reason why JS is weird
{
  console.log('10' == 10);//Output: false
  console.log(NaN == Nan);//Output: false
  console.log(100 + "Code for Interview");//Output: "100Code for interview"
  if("Heelo"){
    console.log("Code");
  }//Output: "Code"
  let num = 42;
  let str = "10";
  console.log(num1 + num2);//Output: 4210
  console.log(num1 - num2);//Output: 32
  console.log(num > str);//Output: true
}
// now we need to be safe from them or bugs in our code can very much arise
// never use ==, because Type Coercion
// use === which includes datatype checking
// still there are some cases which can create bugs even with the use of `===`
{
  console.log(-0 === 0);//Output: true
  console.log(NaN === NaN);//Output: false
}
// In such cases we can use `Object.is()`
{
  Object.is(-0, 0);//Output: false
  Object.is(NaN, NaN);//Output: true
}

// Closure
{

  function one(){
    var channelName = "Code for Interview";
    return function two(){
      var actorName = "Ayushmaan Khurana";
      return function three(){
        console.log(channelName, actorName);
      };
    };
  }
  one();
  // Output: function two(){var actorName = "Ayushmaan Khurana";return function three(){console.log(channelName, actorName);};}
  one()();
  // Output: function three(){console.log(channelName, actorNme)}
  one()()();
  // Output: Code for Interview, Ayushmaan Khurana
  // When function one is called it gets pushed into the stack
  // Whenever we execute a JS file a Global Execution Context gets created
  // If there is a function it has a Function Execution Context
  // channelName gets stored in FEC of one();
  // when our execution comes to return function two() statement, function one() gets removed from the stack and function two is pushed into the stack
  // because function one() is now gone so is its execution context
  // now we have FEC of function two()
  // the the question arises how the FUCK do we have access to channelName in function three(); ?
  // Here comes the concept of Closures
}
// In JavaScript Closures are made by two concepts
// First concept is functions, if you do not have functions in JS file then closures won't be made
// Second concept s Lexical Scoping
// We know that in JS we have two phases Creation and Execution Phase
// when you are writing code, at that very monet JS gets to know which function is where, that is, in which scope or in which lexical environment

// So even though our function one() was returned and removed from the stack our function three() i still accessing the `channelName`
// We have something called Memory heap, where all our variables are stored
// In JS we have a garbage Collector similar to how we have in Java

// Garbage Collector in JS works on `Mark and Sweep Algorithm`
// It marks whatever it needs
// For example, here as we are using `channelName` then our Garbage Collector will mark that it is still being referenced
// and Garbage Collector in the next iteration will sweep those variables which are not marked
// So when our Garbage collector will get to channelName for sweeping it will see that there is a closure built there, ven though our function has been returned and removed from the stack
// and how does JS knows that function three is using `channelName` ? The answer is Lexical Scoping

// When do we need to create a Closure?
{
  function one(num1){
    const num2 = Math.pow(10, 10);//let's assume that this line is completing some very huge time and space consuming task
    return num1 * num2;
  }
  // calling this function once won't be a problem
  one(20);
  // the problem arises when this function is called multiple times
  one(20);
  one(20);
  one(20);
  one(20);
  one(20);
  // our highly time and space consuming line of code will be called as much amount of time as our `one()` function is called
  // one solution can be that we globally declare the num2 variable, but we know that that is not aa good thing to do in previous lessons
  // hence the solution that remains is closures
}
{
  function one(){
    const num2 = Math.pow(10, 10);
    return function two(num1){
      return num1*num2;
    }
  }
  // Now we will only call `one()` once and then we will store it to a constant
  const fun = one();
  fun(20);// because of the above line, when we now call our fun, it will call our nested function, that is, two()
  fun(20);
  fun(20);
  fun(20);
  fun(20);
  fun(20);
  fun(20);
  // because of this one() function only ran once
}

// Highly asked question on closure
{
for(var i =0; i < 5; i++){
  setTimeout(() => {
    console.log("i", i);
  }, 3000)
}
//Output: after 3 seconds we will see 5 times 5
// Expected Output: after 3 seconds 0, 1, 2, 3, 4
// we know that in JS by default function scope works
// if we use `var` keyword
// with `var` keyword a new block only forms when we create a function
// the curly braces of for loop does not make a new block
// hence the `var i` is a global variable

// We can either make var to let to achieve expected output
// but what if we do not have to use let
// we can then use closures, 
// we will be making an IIFE
for(var i =0; i < 5; i++){
  (function (index){
  setTimeout(() => {
    console.log("i", index);
  }, 3000);
})(i);
}
// usinf IIFE makes a closure here

}

// Prototypical Inheritance
// Inheritance is a very important topic in any programming language
// As long as we cannot inherit, we cannot properly use reusability
// But in JS we do not have Class based inheritance, we rather have Object based Inheritance

// We know that everything in JS is an object
// Why do we need Prototypical Inheritance when we have call, bind and apply
// If you want properties then use bind
// but Prototypical Inheritance makes it even more easier
// Inheritance is simply one object accessing the methods and properties of another object
// 
// We have something called `dunder proto` in JS: __proto__
// dunder proto is an entire prototypical chain
// If we have an arrray called arr1
// The chain would be something like Object -> Array -> arr1
// hence if we print arr1.__proto__ and arr1.__proto__.__proto__

{
let arr1 = [];
console.log(arr1.__proto__);
// Output: An Array of All the functions we can use with arrays

console.log(arr1.__proto__.__proto__);
// Output: An Object of All the functions we can use with arrays
}
// same goes for functions as they are object
{
  function one() {}
  console.log(one.__proto__);
  // Output: A function
  console.log(one.__proto__.__proto__);
  // Output: An Object
}

// Classes in Javascript are simply syntactic sugar, internally it follows Prototypical Inheritance