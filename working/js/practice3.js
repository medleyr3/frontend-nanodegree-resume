/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!

// var example;

// example = $('.example');
// $(example).each( function(){

// 	$(this).text(); // returns text of each element
// })

// var thePees, lengthOfPee; 

// thePees = $('div').find('p');


//  lengthOfPee = $(thePees).each( function(){

//  	var thisArray = $(this).text().split('');
//     var count = thisArray.length;

//   $(this).append (" " + count);

// });

function numberAdder(){
var text, number;
text = $(this).text();
number = text.length;
$(this).text(text + " " + number);


}

$('p').each(numberAdder);
