// Our JavaScript code runs on Browser
// We run it in Browser because Browser has something called JavaScript Engine, Browser is not a runtime environment
// SpiderMonkey was the very first javaScript Engine that is used in FireFox
// If we can get a JavaScript Engine outside the Browser then we can run JS even outside the Browser
// This is where NodeJS comes in
// In 1995 Brenden Eich , the creator of JS, was working on Netscape Browser
// In 2008, Google created V8 engine
// In 2009 Ryan Dahl took Google's V8 Engine and combined it with `libuv` and thus NodeJS was born
// Now we can use JS in our Backend
// Whatever request occurs first goes to V8, if V8 is unsuccessful then it goes to libuv
// NodeJS code is written completely in JS but it hits the code of C, and C++ thus managing Database and Files

// NodeJS is not a library or a framework, It is a JS runtime environment
// window Object provides us with browser's Runtime
// global Object provides us with NodeJS Runtime

// NodeJS will always provide us with two versions of Downloads, an LTS and a Current Version
// Current Version has all the latest features (They are Odd versions)
// LTS is long term support and is a very stable version (They are even versions)

// REPL -> Read, Eval, Print, Loop
// REPL is an Environment which READS our code then EVALUATES followed by PRINTING and then it LOOPS
// NodeJS has a `global` object which contains everything that the window Object of Browser does and also provides some extra methods

// Browser has : window, document, history, location, navigator
// Node has : global, process, __filename, __dirname, import

// [V8 Engine]->[Node.JS API{JavaScript} (fs, http, path, crypto)]->[Node.JS bindings{C++}]->[libuv{C}]
/*
                    ┌──────────────────┐
                    │  Application     │
                    └────────┬─────────┘
                             │
                             ▼
   ┌───────────────────────────────────────────┐
   │          V8 Engine (JavaScript Engine)    │
   └────────────────────────┬──────────────────┘
                            │
  ┌─────────────────────────┴───────────────────────┐
  │                   Node.js API                   │
  └──────────────┬─────────┬──────────────┬─────────┘
                 │         │              │
                 ▼         ▼              ▼
        ┌─────────────┐ ┌───────────┐ ┌─────────────┐
        │ File System │ │    HTTP   │ │     OS      │
        └─────────────┘ └───────────┘ └─────────────┘
                        (Networking)
                            │
                            ▼
                ┌────────────────────────┐
                │       Libuv            │
                │  (Event Loop, Thread   │
                │   Pool, etc.)          │
                └────────────────────────┘
                             │
                             ▼
           ┌────────────────────────────────┐
           │        C/C++ Bindings          │
           │ (Interfaces to OS, Libraries)  │
           └────────────────────────────────┘
                             │
                             ▼
               ┌────────────────────────┐
               │ Operating System (OS)  │
               └────────────────────────┘

*/

// Worker Threads and Process
// NodeJS is Single threaded, it can handle only one asynchronous operation at once
// Our job gets assigned to a process, and our process can spawn multiple threads which can work simultaneously
// These threads contain a CallStack
// Your CPU has Core and each thread gets assigned a core to perform a task
// It's our Schedulers job that every thread gets fair amount of time
// Threads gets executed simultaneously so that our code gets executed asynchronously
// LibUV performs all our asynchronous Operations
// It consist of Event Queue -> Event Loop ->Blocking Operations -> Worker Threads
//                       |--------|    |--------- Execute Callback <------|
// Operations that do not block our Core are called Non-Blocking Operations(Synchronous Code)
// Operations that do block our Core are called Blocking Operations(ASynchronous Code)

// Event Loop
// User Request gets pushed into an Event Queue(FIFO)
// Our Event Loop fetches those requests and checks whether they are a Blocking Operation or a Non-Blocking Operation
// If it's a Non-Blocking operation(Synchronous), the Event Loop sends it to V8 Engine
// V8 Engine is running on the main thread
// If it's a Blocking operation(ASynchronous), the Event Loop further checks if it's a file system operation or a Network Operation
// If it's is File System Operation then those request will be sent to the Thread Pool(Can be considered as Worker Threads)
// The result(Callback) will be sent back to the Event Loop which will Execute the Callback
// If it's is Network Operation then those request will be sent to the Operating System which sends it to kernel which will assign that request to a Thread which will Occupy a Core.
// The result(Callback) will be sent back to the Event Loop which will Execute the Callback

// Phases of Event Loop
// Phases of Event Loop is basically an understanding of which callbacks(which are result of asynchronous function) will get executed
/*
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
*/
// In the above diagram each block represents the phases of Event Loop, and the order they are written in tells us in which order the callbacks will be executed
// There are 6 phases and each phase denotes a Queue
// Timers represent all the callbacks that comes from timers, such as setTimer, setInterval
// Pending Callbacks represents System Errors, such as TCP Operations, DNS Operation errors
// Idle, Prepare: NodeJS uses them internally, NodeJS prepares Event loop for the next phases and gather Information for the upcoming Event
// Poll Queue represents all the callbacks except setTimeout, setinterval, setImmediate, close callbacks. Such as file reading, network and more
// Check Phase executes callback from setImmediate, it is designed that it will immediately execute after I/O operation in Poll Phase
// Close Callback Phase , here all our callbacks that refers to closing a connection such as that of socket or of our Database , that gets executed here'
// When these phases gets executed once, it is considered that One(1) Tick has been completed and it will again go back to Timers Phase
// Our Poll phase is the most important, all our asynchronous I/O request comes into the Poll Phase Queue
// Event Loop executes our Poll Phase Queue, and even after the Poll Queue gets empty our Event Loop stays there
// The amount of time that Event Loop stays in our Poll Phase Queue depends on whether our Check Phase Queue consist of any Callback or not
// If our Check Phase Queue remains empty then the Time that our Event Loop stays in the Poll Queue depends on the Timer Queue
// If the time set in setInterval or setTimeout function gets completed or Lapses then after that our Event Loop moves on the Check Phase Queue then to Close Callback Phase Queue and Cycle repeats
//
// Ques 1:
setTimeout(() => {
  console.log("SETTIMEOUT");
}, 0);

setImmediate(() => {
  console.log("SETIMMEDIATE");
});

// OUTPUT: Unexpected, sometimes its SETTIMEOUT followed by SETIMMEDIATE sometimes its SETIMMEDIATE followed by SETTIMEOUT
// Because, the output depends on what amount of callbacks you have, sometimes appointing a delay of 0 makes the event loop shift to next phase until it reaches the Poll phase which makes it execute setImmediate first, sometimes, it doesn't
// Absence of a synchronous function or a Poll Phase gives this Unpredictable Behaviour

// Ques 2:
setTimeout(() => {
  console.log("SETTIMEOUT 1");
}, 0);
setTimeout(() => {
  console.log("SETTIMEOUT 2");
}, 0);

setImmediate(() => {
  console.log("SETIMMEDIATE 1");
});

setImmediate(() => {
  console.log("SETIMMEDIATE 2");
});

console.log("start");
// OUTPUT: start SETTIMEOUT 1 SETTIMEOUT 2 SETIMMEDIATE 1 SETIMMEDIATE 2
// Here the Synchronous Function is present

// Ques 3:
setImmediate(() => {
  console.log("SETIMMEDIATE 1");
  setImmediate(() => {
    console.log("SETIMMEDIATE 2");
  });
});

setTimeout(() => {
  console.log("SETTIMEOUT 1");
  setTimeout(() => {
    console.log("SETTIMEOUT 2");
  }, 0);
}, 0);

console.log("start");
// OUTPUT: start SETTIMEOUT 1 SETIMMEDIATE 1 SETTIMEOUT 2 SETIMMEDIATE 2

// Ques 4:
const fs = require("fs");
fs.readFile(__filename, () => {
  setTimeout(() => console.log("timeout"), 0);
  setImmediate(() => console.log("immediate"));
});

console.log("start");
// OUTPUT: start immediate timeout

// We have two miscellaneous types of Operations MacroTask and MicroTask,
// MicrosTask consist of Promise.resolve(), Process.nextTick(), Process.exit(), they all get pushed in another MicroTask Queue , these operations are high priority operations
// Our Event Loop first come sin MicroTask Queue and completes thm before MicroTask Queue gets Emptied

// Ques 5:
setTimeout(() => {
  console.log("timeout");
}, 0);
setImmediate(() => {
  console.log("immediate");
});

Promise.resolve().then(() => console.log("promise"));
Promise.resolve().then(() => console.log("promise 2"));

console.log("start");
// OUTPUT: start promise promise 2 timeout immediate

// Ques 6:
setTimeout(() => {
  console.log("1");
}, 50);

process.nextTick(() => console.log(2));
setImmediate(() => console.log("3"));
process.nextTick(() => {
  setTimeout(() => {
    console.log("4");
  }, 1000);
});

import { log } from "console";
// OUTPUT: 2 3 1 4

// Event and Even Emitter Class
// In NodeJS website they say `As an asynchronous EVENT-DRIVEN JavaScript Runtime`, Our NodeJS works on Events
// Mostly applications that use Events are based on Observer Design Pattern
//
// which means lets say there a centralized subject, and we have Observers 1, 2, and 3.
// and they are observing the subject
// and lets say the subject does something, let's say it has given an exam(which is an Event) and it has two outputs either it passes or fails
// Now on the basis of whether the subject passed or fail on that basis Observer 1, 2 and 3 takes action
// This is known as observer design pattern
//
// Practical Example: mongoose.connection.on('connected', ...{rest of the code}), where whether the connection happened or not is the observation

// When we need to create an Event in NodeJS we need to use Event Emitter Class
// when events are fired let's day `connected` in mongoose.on('connection', {...rest} ) we can capture those events in our callback function

// Making HTTP Request
// we need to import http library
import http from "http";
// Now we can access all the functions in the http
const req = http.request("http://www.google.com", (res) => {
  res.on("data", (chunks) => {
    console.log(chunks);
  });

  res.on("end", () => {
    console.log(
      "End event  basically tells us that there is no more response here"
    );
  });
});

req.end();
// If we run server.js now we will get a response of bits and bytes(5b 67 5d 3f 8s ...) followed by "End event  basically tells us that there is no more response here"

import https from "https";
import { get } from "https"; // we can even use destructuring
import { setTimeout } from "timers/promises";
// Now we can access all the functions in the http
https.get("https://www.google.com", (res) => {
  res.on("data", (chunks) => {
    console.log(chunks);
  });

  res.on("end", () => {
    console.log(
      "End event  basically tells us that there is no more response here"
    );
  });
});
// not using https to call https://www.google.com would have resulted in error
// we can also use `https.request` in place of `https.get` the benefit of using get is that we do not need to call the req2.end() or store our request anywhere
// If we run server.js now we will get a response of bits and bytes(5b 67 5d 3f 8s ...) followed by "End event  basically tells us that there is no more response here"

// LU(Let's Upgrade Youtube Channel)
// Asynchronous Programming
// One of the earliest ways to handle Asynchronous Programming was callback, but those resulted in Callback hell which made the code difficult to maintain
// then came Promises, provides a cleaner alternative to callbacks by representing a value that may be available now, or future or never, but they are still callbacks
// and now the latest is async await, introduced in es2017, whose convention makes asynchronous code look synchronous, we can use `await` keyword on expressions in `async` marked functions to pause execution until a promise is resolved. This leads to cleaner and more manageable code
// callbacks;
console.log(1);
print(print3);

function print(cb) {
  setTimeout(() => {
    console.log(2);
    cb(print4);
  }, 3000);
}

function print3() {
  console.log(3);
}

console.log(1);
print(print3(print4));
function print(cb) {
  setTimeout(() => {
    console.log(2);
    cb(); //Now if I have to print 5, then again I would need to crate a function called print5, then add a parameter to print4, then call that parameter after logging 4
  }, 3000);
}

function print3(cb2) {
  console.log(3);
  cb2();
}

function print4() {
  console.log(4);
}
// Promises;
// our phone is broken we go to the shopkeeper, the shopkeeper says give me five seconds to fix your phone
let phoneRepaired = false;
let shopkeeperPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (phoneRepaired) {
      resolve("Phone has been repaired");
    } else {
      reject("Phone is not fixed");
    }
  }, 5000);
});

shopkeeperPromise
  .then((data) => {
    // if the Promise `resolves` this code will get executed
    console.log("Congratulations");
    console.log(data);
  })
  .catch((err) => {
    // if the Promise `rejected` this code will get executed
    console.log("Sorry");
    console.log(err);
  });
// the above is an example where code will wait for the asynchronous operation to resolve, that is, for the timer to finish the 5 second delay

// Async Await;
async function repairPhone() {
  await setTimeout(() => {
    5 + 5;
  }, 1000); //Code will only go further once this expression and timeout resolves
}

// USING LIBRARIES AND FRAMEWORKS
// Libraries such as BlueBird and Axios, provide enhanced functionalities for managing
// They offer utilities for promise chaining, cancellation and error handling

// Code with tkssharma
// What is an error-first callback
var data = fs.readFile("app.txt", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});
// simple callback
var myCallback = function (err, data) {
  if (err) {
    throw err;
  }
};

var usingItNow = function (callback) {
  callback(null, "got it");
  callback(new Error("error"), "got it");
};

usingItNow(myCallback);

// How can you avoid callback hell: answer is Promises
// a simple example of callback hell
var data = fs.readFile("app.txt", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
  // this below operation is dependent on previous operation and if any one gets stuck then the complete loop gets stuck
  fs.readFile("app1.txt", function (err, data) {
    if (err) {
      throw err;
    }
    console.log(data);
  });
});

// Promise
let obj = new Promise(function (resolve, reject){
  // resolve a promise
  // reject a promise
})
// When should you use npm and when should you use yarn: yarn is a little bit faster
// Favorite HTTPS framework: happy, koa, express, loopback

// Callback vs Promises
// Promises handles success and Failure, Callbacks does not handle anything, they may need two separate functions
// Callback can be called multiple times by the function they are passed to but Promises can only be present for one event(you can bind one HTTP call to a single promise)
// Before ES6 there was no promise, we had to use promise library queue library
// Callback is just a block of code which runs in response to an Event
// It is like a function which we are passing to another function as an argument
function getAPIData(){
  return new Promise(function(resolve, reject){
    // resolve or reject the promise
    return resolve(data);
  })
}

var p = new Promise(function(resolve, reject){
  if(true){
    resolve(/* value*/);
  }
  else{
    reject(/*reason */)
  }
});

p.then(function(data){
  //capture data
})

var fetchJSON = function (url) {
  return new Promise((resolve, reject) => {
    $.getJSON(url).done(function(json){
      resolve(data);
    }).fail(function(err){
      reject(err);
    })
  })
}

var itemURL = {
  url1:"http://api.com",
  url2:"http://api2.com",
}

itemPromise = itemURL.map(eftchJSON);
Promise.all(itemPromise).then(function(result){
  itemPromise.map(function(){
    console.log(data);
    
  })
})

// By doing asynchronous processing on a single thread under a typical , more performance and scalability is achieved by NodeJS
// to shift ti different version of node
// ~node version manager
// ~nvm

// UseCase of NodeJS: real time mechanism
// NodeJS is Event driven and has its own library EventEmitter library
// Event Driven programming is building our application based on the response of the events
function addToCart(id){
  new Eventemiter("cart.add", {product_id : id});
} 

event.on("cart.add", function(event){
  console.log(event.product_id);
})

// Module Exports
// This is a single entity, whenever we need to export something from one file to another, we need to write that code
// let's say we write below code in greetings.js
let callFunction = () => {
  console.log("hello");
}
module.exports = callFunction;

module.exports = {
  sayHello: function(){
    console.log("Hello");
  },
  sayBye: function(){
    console.log("Bye");
  }
}

// To require them in another file
var greetings = require("./greetings");
greetings.sayHello();
greetings.sayBye();

// process.nextTick();

// modules
// fs, http, net, socket.io, express
var events = require('events');

var eventEmitter = new events.EventEmitter();
eventEmiter.on('MyEvent', function(events){
})

// read and write Stream
var fs = require('fs');
var readStream = fs.createReadStream("text.txt");
readStream.on("data", function(chunk){
  data += chunk;
})
readStream.on("end", function(chunk){
  console.log(data);
  
})

// Node JS debugging
// promises
// async await
// To maintain consistency use linter tools
// eslint being the popular one
// testing code =>
// debugging code => node-inspector/ VSCode / Chrome browser debugging

// ORM
var mongoose = require('mongoose');//library import
var Schema = mongoose.Schema;// library filtering
var userSchema = new Schema({// Schema
  name:String,
  username: {type: String, required: true, unique: true},
  admin: Boolean
})
var User = mongoose.model('User', userSchema);//creating collection

module.exports = User

// Process Manager
// writing node indexedDB.js is not enough
// when there are multiple request coming in and you have a traffic then we should use PM2 using which we can create 
// multiple instance of our application

// NodeJS testing
// npm supertest
// npm mocha