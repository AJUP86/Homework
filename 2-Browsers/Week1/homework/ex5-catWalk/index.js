'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.
 
   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
//Create a variable to store a reference to the `<img>` element.
const cat = document.querySelector('img');
//change Image style 
cat.style.left = "0px";

//start
let startWalking = new Date().getTime();
function catWalk() {
//Complete the function called catWalk() to move the cat 10 pixels to the right
 // of where it started, by changing the `left` style property.
 cat.style.left = "10px";
 const catWalked = new Date().getTime();
 const time = ((catWalked-startWalking)/1000);
 const newPosition = time *50;
 cat.style.left = newPosition + "px";
 window.requestAnimationFrame(catWalk);

 if (newPosition > window.innerWidth) {
   { startWalking = catWalked}
} 
 if (newPosition > ((window.innerWidth - cat.width) / 3) && newPosition < ((window.innerWidth - cat.width)/3)+5) {
   const timerId = setInterval(() => cat.src= "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif", 2000);
   setTimeout(() => { clearInterval(timerId); cat.src="http://www.anniemation.com/clip_art/images/cat-walk.gif"; }, 7000);

}
}
catWalk();


// TODO execute `catWalk` when the browser has completed loading the page
