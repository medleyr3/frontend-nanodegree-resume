/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/

$('#my-button').on('click', function(){

$('#my-button').remove();
$('body').addClass('success');
$('.success').css('background-color','blue');

});

// $( 'header' ).on( 'click', function(  ) {
//     $('.nav-item').css('background','red').toggle('slow', function(){

//     });
// });
//event delegation
$( '.container' ).on( 'click', 'img', function() {
    $('.nav-item').css('background','red').toggle('slow', function(){

    });
});