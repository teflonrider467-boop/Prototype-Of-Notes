// JavaScript Can Change HTML Content
document.getElementById("demo").innerHTML = "Hello JavaScript";
// JavaScript Can Change HTML Attribute Values
document.getElementById('myImage').src='pic_bulbon.gif';
// JavaScript Can Change HTML Styles (CSS)
document.getElementById("demo").style.fontSize = "35px";
// JavaScript Can Hide HTML Elements
document.getElementById("demo").style.display = "none";
// JavaScript Can Show HTML Elements
document.getElementById("demo").style.display = "block";
// In HTML, JavaScript code is inserted between <script> and </script> tags.
// Scripts can also be placed in external files
// An external script can be referenced in 3 different ways:

// 1.) With a full URL (a full web address) -> <script src="https://www.w3schools.com/js/myScript.js"></script>
// 2.) With a file path (like /js/) -> <script src="/js/myScript.js"></script>
// 3.) Without any path -> <script src="myScript.js"></script>

// A computer program is a list of "instructions" to be "executed" by a computer.
// In a programming language, these programming instructions are called statements.
// A JavaScript program is a list of programming statements.
// JavaScript statements are composed of:
// Values, Operators, Expressions, Keywords, and Comments.
// JavaScript ignores multiple spaces. You can add white space to your script to make it more readable
// JavaScript keywords are used to identify actions to be performed
// JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

// JavaScript can "display" data in different ways :-
// Writing into an HTML element, using      innerHTML.
// Writing into the HTML output using       document.write().
// Writing into an alert box, using         window.alert().
// Writing into the browser console, using  console.log().

// JS is case sensitive

// Code after double slashes // or between /* and */ is treated as a comment

// The JavaScript syntax defines two types of values:
// 1. Fixed values(Numbers, string)
// 2. Variable values(var, let, const)

// Fixed values are called Literals.
// Variable values are called Variables.

// Identifiers are JavaScript names.
// All JavaScript variables must be identified with unique names
let $_abcdefghijklmnOPQRSTUVWXYZ0123456789;
let _$abcdefghijklmnOPQRSTUVWXYZ0123456789;
let abcdefghijklmnOPQRSTUVWXYZ$_0123456789;
// All JavaScript identifiers are case sensitive

// JS Expression are combination of values, variables, and operators.

// In a programming language, variables are used to store data values.
// JavaScript uses the keywords var, let and const to declare variables, or it can store them automatically.
x;
var x;// After the declaration, the variable has no value (technically it is undefined)
let x;
const x = 1;//Const cannot be empty, These are constant values and cannot be changed.
// let and const. These two keywords provided Block Scope in JavaScript
{
    let y = 2;
}
// Variables declared inside a { } block cannot be accessed from outside the block
// Variables declared with the `var` always have Global Scope, they cannot have a Block Scope.
// The keyword const is a little misleading.
// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:
//         Reassign a constant value
//         Reassign a constant array
//         Reassign a constant object
// But you CAN:
//         Change the elements of constant array
//         Change the properties of constant object


// There are different types of JavaScript operators:
//      Arithmetic Operators(+, ++, -, --, *, **, /, %)
//      Assignment Operators(=, +=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, |=, &&=, ||=, ??=)
//      Comparison Operators(==, ===, !=, !==, >, >=, <, <=, ?), Note that strings are compared alphabetically
//      String Operators(<, <=, >, >=, +, +=, ==, ===)
//      Logical Operators(&&, ||, !)
//      Bitwise Operators(&, |, ~, ^, <<, >>, >>>)
//      Ternary Operators(?)
//      Type Operators(typeof, instanceof)
// The variables and constants on which the operators are applied are known as OPERANDS

// JavaScript uses an assignment operator ( = ) to assign values to variables
x = 6;

// JavaScript uses arithmetic operators ( + - * / ) to compute values:
(5 + 6) * 10;
// When adding a number and a string, JavaScript will treat the number as a string.
// JavaScript evaluates expressions from left to right. Different sequences can produce different results

// An expression is a combination of values, variables, and operators, which computes to a value
5 * 10

// JavaScript has 8 Datatypes
// Boolean, Booleans can only have two values: true or false
// Number, All JavaScript numbers are stored as decimal numbers (floating point). Javascript numbers are always one type: double (64-bit floating point)
// Bigint, datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number
// String, Collection of Characters
// Undefined, a variable without a value, has the value undefined
// Object, Built-In(Arrays, Dates,...) and User-Defined(key:value pair)
// Null, No-Value, has to be specifically defined
// Symbol

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:
// Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types

// A JavaScript function is a block of code designed to perform a particular task.
function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }

// When JavaScript reaches a return statement, the function will stop executing.
// The return value is "returned" back to the "caller"
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.
// Function arguments are the values received by the function when it is invoked

// The code inside the function will execute when "something" invokes (calls) the function:
// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)