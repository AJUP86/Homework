'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.querySelector('body').style.fontFamily = "Arial, sans-serif"
document.getElementById('nickname').textContent = "Alex"
document.getElementById('fav-food').textContent = "Hamburger"
document.getElementById('hometown').textContent = "Managua"
const getUl = document.querySelector('ul')
const getLi = getUl.children
Array.from(getLi).forEach(element => element.className = 'list-item');