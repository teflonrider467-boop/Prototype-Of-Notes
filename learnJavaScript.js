// Note: one can go to minify.org to minify JavaScript or CSS file in order to reduce space and make the website a little bit more faster

// A javascript file named script.js is normal readable version, whereas script.min.js is a minified version

// It is an Interpreted language like Python/Ruby.
alert("Hello");// alert allows you to portray a pop-up message at top of your screen
window.alert("Hello");//same but longer syntax
prompt("What is your name")// similar to alert but ask the user to put in an input, but it is not committed to memory(not stored in a variable) so the information is lost
var promptname = prompt("What is your name");//committed to a memory
typeof(23);//Let's you know the data type
// -> integer

typeof("H ardik");
// -> String

typeof(true);
// -> Boolean

typeof(23);
typeof(23);
var myName = "Hardik";// var is a `keyword`(just like alert, prompt, etc.), myName is `variable name`, "Hardik" is `value`
myName = "Hardik Singh";//We don't need to use `var` again
var yourName = prompt("What is your name?")//Stores the answer in yourName variable
// Use camel casing for naming your variable(myName, thisCar, greenShoes)
// variable names cannot be same as keywords
// variable name cannot begin with number
// variable name cannot contain spaces
var abc123$_ = "Hardik";
// String Concatenation
var concatenation = "Hardik"+" "+"Singh";
var concatenation2 = "Hello "+"Hardik"+" Singh";
// Determining String Length
myName.length;
// String Slicing
var stringToBeSliced = "This String";
stringToBeSliced.slice(0,1);// return `T`, where `T` is at position 0, we can also consider each character to have an imaginary gap, so the gap before `T` is at position 0 and after `T` is at position 1, hence slicing gives us `T`
// Casing in Strings
var stringToBeCased = "This String";
stringToBeCased.toUpperCase();
stringToBeCased.toLowerCase();
// Operators
var number1 = 9;
var number2 = 2;
//      Addition
var added = number1 + number2;
//      Subtraction
var subtracted = number1 - number2;
//      Multiplication
var multiply = number1 * number2
//      Division
var divide = number1 / number2;//4
//      Modulo
var remainder = number1 % number2//1
//      Increment
number1++;//similar to number = number+1
number1+=2;//similar to number1 = number1+2
//      Decrement
number1--;//similar to number = number-1
number1-=2;//similar to number1 = number1-2
//Functions
function getMilk(money){
    alert("Wake Up");
    alert("Get Ready");
    alert("Go Out");
    if(money > 10){
        var numberOfBottles = Math.floor(money/10);
        var change = money - (numberOfBottles*10);
        alert("buy "+ numberOfBottles +" bottles and pay " +(numberOfBottles*10)+ " rs and get"+(money - (numberOfBottles*10))+"as change");
    }
    else{
        alert("not enough money")
    }
    alert("Come back home");
    return change;
}
var remainingMoney = getMilk(130);
// A Callback function is a function that is called when a requirement is met or a particular operation is done performing, example setTimeOut

//Random number generator
var n = Math.random();// generates number n=between 0 -0.9999999999999999, never reaches 1 and 0.
n = n*6//generates number between 0*6 = 0 and 0.99999999999999*6 = 5.something(0.99*6=5.94)
n = Math.floor(n);// rounds it down to smaller nearest whole number(0-5)
n=n+1;//generates number between 1-6

//Control Statements
if(n === 6){
    console.log("You have unlocked your turn to move");
} else if(n === 1){
    console.log("You have also unlock your turn");
}else{
    console.log("Wait for your turn to roll again");
}
var firstNumber = 1 ;
var secondNumber = 2;
var thirdNumber = "1";
console.log(firstNumber < secondNumber);//Output: True
console.log(firstNumber <= secondNumber);//Output: True
console.log(firstNumber > secondNumber);//Output: False
console.log(firstNumber >= secondNumber);//Output: False
console.log(firstNumber == secondNumber);//Output: False
console.log(firstNumber != secondNumber);//Output: True
console.log(firstNumber == thirdNumber);//Output: True
console.log(firstNumber != thirdNumber);//Output: False
console.log(firstNumber === thirdNumber);//Output: False
console.log(firstNumber !== thirdNumber);//Output: True

// && -> AND
// || -> OR
// `!` -> NOT
console.log(firstNumber < secondNumber || firstNumber > secondNumber);//Output: True
console.log(firstNumber < secondNumber && firstNumber > secondNumber);//Output: False

// Array:It is a collection of items that are related and are stored in the same variable
var eggs = ["ducks", "chicken", "Fish", "Eagle", "Snakes"];
console.log(eggs[0]);// Output: ducks
console.log(eggs.length);//Output: 5
console.log(eggs.includes("chicken"));// returns True of `chicken` present
eggs.push("Ostrich");//Adds the element at the end of array
eggs.pop();//Deletes the element at the end of array



const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//  MAP(Iterates through each item and allows us to transform each item in some way, the result will be another array)

// 1. Get an array of all names
const characterNames = characters.map((character) =>{
    return character.name;
}) 
// 2. Get an array of all heights
const characterHeights = characters.map((character) =>{
    return character.height;
})
// 3. Get an array of objects with just name and height properties
const minifiedCharacters = characters.mapp((character) => {
    return ({
        name: character.name,
        height: character.height
    });
})
// 4. Get an array of all first names
const firstName = characters.map((character) =>{
    return character.name.split(" ")[0];
})

//  REDUCE(It allows us to iterate through each element and get some sort of ending result)

// 1. Get the total mass of all characters
const totalMass = characters.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue.mass;
}, 0)// ) is the initial value of the accumulator
// 2. Get the total height of all characters
const totalHeight = characters.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue.height;
}, 0)// ) is the initial value of the accumulator
// 3. Get the total number of characters in all the character names
const totalCharactersInName = characters.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue.name.length;
}, 0)
// 4. Get the total number of characters by eye color (hint. a map of eye color to count)
const charactersByEyeColor = characters.reduce((accumulator, currentValue) =>{
    if(accumulator[currentValue.eye_color]){
        accumulator[currentValue.eye_color] = accumulator[currentValue.eye_color]+1;
    }else{
        accumulator[currentValue.eye_color] = 1;
    }
    return accumulator;
}, {})

//  FILTER(Returns the elements with matching properties)

// 1. Get characters with mass greater than 100
const greater100Characters = characters.filter((character) =>{
    return character.mass > 100;
})
// 2. Get characters with height less than 200
const shorter200Characters = characters.filter((character) =>{
    return character.height < 200;
})
// 3. Get all male characters
const maleCharacters = characters.filter((character) => {return character.gender === "male";})
// 4. Get all female characters
const femaleCharacters = characters.filter((character) => {return character.gender === "female";})

//  SORT(Sort will let us iterate through each item in the array and lets us sort the array)

// 1. Sort by name
const sortedNameByAscending = characters.sort((a, b) =>{
    if(a.name < b.name){
        return -1;
    }
    return 1;
})
const sortedNameByDescending = characters.sort((a, b) =>{
    if(a.name < b.name){
        return 1;
    }
    return -1;
})
// 2. Sort by mass
const sortedMassByAscending = characters.sort((a, b) =>{
    // If the result is negative `a` is sorted before `b`
    // If the result is positive `b` is sorted before `a`
    return a.mass - b.mass;

})
const sortedMassByDescending = characters.sort((a, b) =>{
    // If the result is negative `a` is sorted before `b`
    // If the result is positive `b` is sorted before `a`
    return b.mass - a.mass;

})
// 3. Sort by weight
const sortedWeightByAscending = characters.sort((a, b) =>{
    // If the result is negative `a` is sorted before `b`
    // If the result is positive `b` is sorted before `a`
    return a.mass - b.mass;

})
const sortedWeightByDescending = characters.sort((a, b) =>{
    // If the result is negative `a` is sorted before `b`
    // If the result is positive `b` is sorted before `a`
    return b.mass - a.mass;

})
// 4. Sort by height
const sortedHeightByAscending = characters.sort((a, b) =>{
    // If the result is negative `a` is sorted before `b`
    // If the result is positive `b` is sorted before `a`
    return a.height - b.height;

})
const sortedHeightByDescending = characters.sort((a, b) =>{
    // If the result is negative `a` is sorted before `b`
    // If the result is positive `b` is sorted before `a`
    return b.height - a.height;

})
// 5. Sort by gender
const sortedGenderByAscending = characters.sort((a, b) =>{
    if(a.gender === "female"){
        return -1;
    }
    return 1;
})
const sortedGenderByDescending = characters.sort((a, b) =>{
    if(a.gender === "female"){
        return 1;
    }
    return -1;
})

//  EVERY(We specify some condition and see if every item meets that condition)

// 1. Does every character have blue eyes?
const allBlueEyes = characters.every((character) => {
    return character.eyecolor === 'blue';
})
// 2. Does every character mass more than 40?
const allMassMoreThan40 = characters.every((character) => {
    return character.mass > 40;
})
// 3. Is every character shorter than 200?
const allHeightLessThan200 = characters.every((character) => {
    return character.height < 200;
})
// 4. Is every character male?
const allGenderMale = characters.every((character) => {
    return character.gender === 'male';
})

//  SOME(Its determining whether atleast one item in the array meets a condition or some condition)

// 1. Is there at least one male character?
const oneMaleCharacter = characters.some((character) =>{
    return character.gender === "male";
})
// 2. Is there at least one character with blue eyes?
const oneBlueEyesCharacter = characters.some((character) =>{
    return character.eye_color === "blue";
})
// 3. Is there at least one character taller than 200?
const oneTallCharacter = characters.some((character) =>{
    return character.height > 200;
})
// 4. Is there at least one character that weighs less than 50?
// 4. Is there at least one character that has mass less than 50?
const oneFitCharacter = characters.some((character) =>{
    return character.mass < 50;
})





//Loops
// While Loops: use if the trigger is an unknown state
var i = 1;
while(i < 10){
    console.log(i);
    count++;
}

//For Loops: use for iteration
for(var i =0; i<10; i++){
    console.log(i);
}

// Document Object Model
// Up-till now we planned how our website would look like
// Now we will make our website interactive, such that it can change its parts
document.querySelector(".class_DOM").innerHTML;
document.querySelector(".class_DOM").innerHTML = "GoodBye";
document.querySelector(".class_DOM").style.color = "Red";
document.querySelector(".class_DOM").clicked();

// Different ways to select elements
document.getElementsByTagName("li");
document.getElementsByTagName("li").length;
document.getElementsByTagName("li")[2].style.color = "Red";

document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color = "yellow";

document.getElementsById("btn");
document.getElementsById("btn")[0].style.color = "yellow";

document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".title");
document.querySelector("li a");// when not in same element, spaces
document.querySelector("li.item");// when in same element, no spaces
document.querySelector("li.item");// gives only the first Element
document.querySelectorAll("li.item");// gives all the Element


// Manipulating the Elements that has been selected
document.querySelector("h1").style.fontSize = "10rem";// Specify every value as a String

// Classes attached to an element
document.querySelector("li").classList;
document.querySelector("li").classList.add("invisible");
document.querySelector("li").classList.toggle("invisible");

// Difference between textContent and innerHTML
document.querySelector("span").innerHTML = "<em>Hello</em>";
document.querySelector("span").textContent = "Hello";

// Attribute get and set
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bind.com");

// EventListener
document.querySelectorAll("button").addEventListener("clicked", handleClick);// If we add parentheses to handleClick,, it will straight up get called even before the click

function handleClick(){
    console.log(this);// `this` keyword refers to the instance of the object that was clicked, here output will be an HTML element
    console.log(this.innerHTML);// here the output will be, i, j, k, l, ...
    alert("I got Clicked");
}

document.addEventListener("keydown", function(event){
    console.log(event);
    alert(event);
});

// Higher Order Functions are functions that are able to take functions as an argument, the function passed as arguments are called CallBack Functions


// Playing sound in JavaScript
var audio = new Audio("audio_file-location.mp3");
audio.play();

// `switch` statement
switch (this.innerHTML) {
    case 'w':
        console.log("Move Forward");
        
        break;// used to jump out of loop
    case 's':
        console.log("Move Backward");
        
        break;
    case 'a':
        console.log("Move Left");
        
        break;
    case 'd':
        console.log("Move Right");
        
        break;

    default:
        console.log("Stand Still")
        break;
}

// JavScript Object
function BellBoy(name, age, hasWorkPermit, languages){// This function is called constructor function
    this.name = name;// these are called properties
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitCase = function (){// such function are called Methods
        alert("May I take your suitcase?");
        pickUpSuitcase();
        moveBy();
    }
}

var bellboy1 = new BellBoy("Timmy", 19, True, ["English", "French"]);
bellboy1.name;


// jQuery ( developed by John Resig)
// jQuery is mainly used to reduce the syntax of JavaScript

document.querySelector("h1");
// can be written as
jQuery("h1");
// can also be written as 
$("h1");

// Incorporating jQuery in our script
// Go to jQuery.com
// Click on Download on the left side of API documentation
// Get the GOogle CDN
// Get the latest version of jQuery(3.x in 2024)
// Paste the script tag above our own JavaScript script link tag
$("#header h1.title").css("color", "red");

// There's no Difference between selecting one element or many element the syntax is the same
// i.e., querySelector and querySelectorAll is represented by $.

$("h1").css("font size");          // Gets the value of font size
$("h1").css("font size", "10 rem");// Sets the value of font size
//  Add Class
$("h1").addClass("big-title margin-50"); // no dot because we specified that it is a class
$("h1").removeClass("big-title");
$("h1").hasClass("margin-50");

// Manipulating text with jQuery

$("h1").text("Bye");
$("h1").html("<em>Bye</em>");

// Manipulating Attributes using jQuery

$("img").attr("src");

$("a").attr("href", "https://www.google.com");

$("h1").attr("class");

// Adding EventListener using jQuery

$("h1").click(function (){
    alert("hello");

});

//      w/o jQuery
for(var i=0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        document.querySelector("h1").style.color = "purple";
    });
}

//      w/ jQuery
$("button").click(function (){
    $("h1").css("color", "purple");
})

//      or we can write

$("button").on("click", function(){
    $("h1").css("color", "purple");
})

// Adding and Removing elements with jQuery

$("h1").before("<button>New</button>");// Adds element before
$("h1").after("<button>New</button>");// Adds element after
$("h1").prepend("<button>New</button>");// Adds element inside `h1` tag before inner-text
$("h1").append("<button>New</button>");// Adds element inside `h1` tag after inner-text

$("button").remove();

// Website Animation using jQuery
// Refer to jQuery effects documentation on w3Schools
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({// you can only add those CSS rules that have numeric value
        opacity: 0.5,
        margin:20,
        margin: "20%"
    });
})
$("h1").hide();
$("h1").show();
$("h1").toggle();
$("h1").fadeOut();
$("h1").fadeIn();
$("h1").fadeToggle();
$("h1").slideUp();
$("h1").slideDown();
$("h1").slideToggle();
