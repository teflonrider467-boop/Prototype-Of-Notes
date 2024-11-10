// Command Prompt is the windows Terminal
// Or go to the run command and type cmd.exe

// Javascript is
// High-Level: Doesn't deal with pushing bits into and out of memory
// Dynamic:  It doesn't want you to declare what type of object it is before declaring it
// Untyped: No support for type-hinting
// Coercive: It will attempt to coerce one type on another
// Single Threaded: Can only use one thread at a time. To get around this, On the Client side JS has `Workers` which are background operations that can process data, On the Server-Side JS has Node which allows `child processes` which spins up a new node instance to complete a task then stops the instance
// Synchronous: All JavaScript events execute synchronously, but JS has an `Event Loop` that allows operations to queue up after each other
// Interpreted: but actually it is something in between, because it has Just in Time Compiler, It first compiles the it is Interpreted

// ECMAScript is what is known as `meta-language`
// A `meta-language` is not an actual programming language, but a specifications for how a programming language should behave

// JavaScript is a scripting language and alike other scripting languages it is an Interpreted Language
// It was developed by Brandon Eich in 1995.
// The main purpose of JavaScript is to execute program at the browser
// We can do many things with JS
// X-Change the page data at runtime
// X-Validate what user is doing on the page
// X-Show and Hide things on the page based on User Action
// X-Download and Upload data in the background from the browser
// X-Animation Effects
// X-Control the Timer

// Original name of JavaScript was `Mocha` -> `LiveScript` -> `JavaScript`
// Another advantage of JavaScript over PHP or any other language is that we get to run some code on the Browser

// This is a Single Line Comment

/* 

This is a
Multi-Line Comment

*/

// JavaScript is Case Sensitive

// Identifiers
// When we say Identifiers we are referring to the name given to the variables, functions, objects, properties and events
// var abcdefghijklmnopqrstuvwxyz1234567890_$ , these are all the characters that can be contained in and Identifier
// They cannot start with number
// They cannot contain keyword


// Debugger and Objects
// debugger;
// When the JS file executes it stops when debugger shows up
// and in web browser when you go to Inspect > console, you can hover over variables and see the value they are holding
// obj.name and obj["name"] are very similar

// Variable and constants

var thisVariableHasUndefinedValue;
var abcdefghijklmnopqrstuvwxyz$_1234567890 = "Valid Variable name";
var constant = 15;

// Primitive(Primitive Data Types)
// There are 3 Primitive Data Types
// 1. Number Data Type, used to store Positive, Negative, Decimal and Whole Numbers
var number = 1;
var number2 = -1;
var number3 = 1.4;
// 2. String Data Type, used to store Character Data
var string = "Hardik";
// 3. Boolean Data Type, used to store `true` and `false` values
var boolean = true;
var boolean2 = false;

// Assignment Operators
// `=` is the assignment operator that is used to assign values to variables

// Comparison Operators
// Operators used to compare values of two expressions
console.log(10 < 9);// Output: false
console.log(10 <= 10);// Output: true
console.log(10 > 9);// Output: true
console.log(10 >= 10);// Output: true
console.log("10" == 10);// Output: true
console.log("10" === 10);// Output: false

// Arithmetic Operators
// Operators used to perform arithmetic operations
var message = 5+3;// This whole line is called Arithmetic Expression
// `+` is called an Arithmetic operator
// +, -, *, /, %, ++, --
// Order of Precedence: ++, --, *, /, %, +, -

// Logical Operators
// Logical operators resolve the expression in either true and false, and the input of these operators or the operands involved are also true and false
console.log((10<9)&&(10>9));
console.log((10<9)||(10>9));
console.log(!(10>9));
// &&, ||, !

// String Operations
// There are two operator: `+`, and `+=`.
var fullName = "WP" + ", " + "Freelancer";
fullName += " " + "Pro";

// Quotes and Escape Sequences
// Single Quotes and Double Quotes can be used to represent String in JavaScript
var withDoubleQuotes = "We'll be Going Now!"// Single quotes is read as a String
// but in Single quotes single quote will be read as ending string,
// hence we'll be using escape sequence: `\` before single quotes
var withSingleQuotes = 'We\'ll be Going Now!';
// Other Escape sequences are: \n , for next line

// Arrays
// CREATE
var colorArray = ['white', 'blue', 0, [255, 255, 255]];
// READ
console.log(colorArray);
console.log(colorArray[0]);
console.log(colorArray[3][1]);
console.log(colorArray.length);
// UPDATE
colorArray[0] = 'red';
colorArray[colorArray.length] = 'Grey';

// Date and Time
var today = new Date();
// Now we can access some of the METHODS in the Day() class
console.log(today);// Output: 2024-05-12T06:17:09.786Z
console.log(today.toDateString);//Output: [Function: toDateString]
console.log(today.toDateString());//Output: Sun May 12 2024
console.log(today.getFullYear());//Output: 2024
console.log(today.getMonth());//Output: 4
console.log(today.getDate());//Output: 12
console.log(today.getDay());//Output: 0
console.log(today.getHours());//Output: 11
console.log(today.getMinutes());//Output: 50
console.log(today.getSeconds());//Output: 55
console.log(today.getMilliseconds());//Output: 474




// Conditional operator/ Ternary Operator
// They are used to check a condition and make a decision based on the result of the condition
// if-elseif-else, switch
// IF-ELSE IF-ELSE
if(10 > 9){
    if(8>9){
        console.log("second if is true");
    }else{
        console.log("Nested else is true");
    }
    console.log("if condition is true");// will execute regardless of above two results(that is, nested if-else)
}
else if(10 < 9 || 10 > 8 && 10 == '10'){
    console.log("else if condition is true");
}else{
    console.log("else condition is true");
}
// We can also write if statement as what we call a Ternary Operator
console.log(10>9 ? "prints this if TRUE" : "prints this if FALSE");//Condition ? Condition is True : Condition is False
// SWITCH
var numberSwitch = 3;
switch (numberSwitch) {
    case 1:
        console.log("Will not execute because 1 !== 3");
        break;
    case 2:
        console.log("Will not execute because 2 !== 3");
        break;
    case 3:
        console.log("Will execute because 3 === 3");
    case 4:
        console.log("Will also execute because `case 3` does not have any break statement ");
        break;
    case 5:
        console.log("Will not execute because 5 !== 3 also case 4 has a break statement");
        break;

    default:
        console.log("Will always execute if none of the case gets triggered");
        break;
}

// Loops
// WHILE loop and DO-WHILE loop
var counter = 0;
while(counter <= 10){
    console.log(counter);
    counter++;
}
do{
    console.log(counter);
    counter++;
}while(counter<=10);
// FOR loop
console.log("Executing For Loop");
for(let i = 0; i<4; i++){
    console.log(i);
}
for(var i = 0; i<4; i++){
    console.log(i);
}
// Below is the example of a closure
for(var i = 0; i<4; i++){
    setTimeout(() =>{
        console.log(i);
    }, 100)
}
for(let i = 0; i < 4; i++){
    setTimeout(() =>{
        console.log(i);
    }, 100)
}

// Functions
// CREATE
// normal function
function writeParameterFiveTimes(parameter){
    for(let i = 0; i<4; i++){
        console.log(parameter);
    }
    return parameter
}

writeParameterFiveTimes("Arguements");
// anonymous function(needs to be stored in a variable)
var result = function(parameter){
    for(let i = 0; i<4; i++){
        console.log(parameter);
    };
    return parameter;
}
// arrow function(needs to be stored in a variable)
var result = (parameter) => {
    for(let i = 0; i<4; i++){
        console.log(parameter);
    };
    return parameter;

};

// Objects
// defining a Class
function Area(a, b){
    this.input1 = a;
    this.input2 = b;

    this.getArea = function(){
        return this.input1*this.input2;
    }
}
// Creating an Object
var AreaObject1 = new Area(2, 3);
var ObjectArea = AreaObject1.getArea();

// Try Catch
try {
    console.log("Executes first");
    if(10<9){
        throw "THROW keyword is used to throw an Error regardless of whether there is a real error";
    }
    
} catch (error) {
    console.log("If while executing try block we get an error this block gets executed" + error);
    
}finally{
    console.log("This block gets executed regardless of whether there was error or not");
}

// DOM(Document Object Model)
var elementByID = document.getElementById("whateverTheIdOfTheElementIs").value;
document.getElementById("whateverTheIdOfAnotherTagIs") = document.getElementById("whateverTheIdOfTheElementIs").value;