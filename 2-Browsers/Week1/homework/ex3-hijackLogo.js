'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
   const img = document.getElementById('hplogo_new');
   img.src = 'https://www.vectrix.nl/media/1948/hack-your-future.png?width=448';
   img.srcset= 'https://www.vectrix.nl/media/1948/hack-your-future.png?width=448';
}

hijackGoogleLogo();
