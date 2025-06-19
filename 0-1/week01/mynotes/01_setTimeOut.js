// Async allows your code to run in the background without blocking the execution of the other code.
// setTimeout, setInterval, FectchAPI, Axios, Promises, etc. are some of the example of async code.

// 1. setTimeout - It is a Web API provided by the browser. It schedules a task to be put on the event queue after a given amount of time.

console.log("Before");
setTimeout(()=>{
    console.log("Hello Mayank");
}, 2000);

console.log("After");

// Output - 
    // Before
    // After
    // Hello Mayank