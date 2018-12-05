/*global $ */
/*
      Project Name:  Recipe Display Application
      
      Author:    Joshua Barrios   
      
      Date:   12/3/2018

      Filename: script.js
*/
/*global $ */


function display(event) {
    
    $(event.currentTarget).next().fadeIn('slow');
}//end of display
  $("h3").click(display);
