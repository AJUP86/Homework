'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
const now = new Date();
const current = now.toLocaleTimeString();
const clock = document.createElement('div');
clock.className = 'myclock';
document.body.appendChild(clock);
const time = document.createTextNode(`${current}`);
clock.appendChild(time);
setTimeout(addCurrentTime,1000 )
}

addCurrentTime() ;

// TODO execute `addCurrentTime` when the browser has completed loading the page
