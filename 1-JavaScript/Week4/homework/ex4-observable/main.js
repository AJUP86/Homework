const createObservable = require('./ex4-observable');

// A candidate subscriber function
function consoleUpperCase(message) {
  console.log(message.toUpperCase());
}
function listener1(message) {
  console.log(message.toUpperCase());
}

// Another candidate subscriber function
function consoleLowerCase(message) {
  console.log(message.toLowerCase());
}
function listener2(message) {
  console.log(message.toLowerCase());
}

// Create an observable object
const observable = createObservable();

// Add three subscribers
observable.subscribe(console.log);
observable.subscribe(consoleUpperCase);
observable.subscribe(consoleLowerCase);
observable.subscribe(listener1);
observable.subscribe(listener2);

// Send a message to all current subscribers
observable.notify("Let's see what happens here!");
observable.notify('Hi!');
// Let's see what happens here! (console.log subscriber)
// LET'S SEE WHAT HAPPENS HERE! (consoleUpperCase subscriber)
// let's see what happens here! (consoleLowerCase subscriber)
