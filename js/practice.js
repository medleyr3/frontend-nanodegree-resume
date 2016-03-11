/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;


//find


navList = $("li.nav-item a").first().attr("href", "a");
//navList = $("li.nav-item").first().css( "background-color", "red" );
// your code goes here

navList - ('.navList');

firstItem = navList.children().first();

link = firstItem.find('a');

link.attr('href', '#1');

var articleItems, ul;


articleItems = $('.article-item').css("fontSize", "20px");

//articleItems = $('.article-list').children().first().remove();

articleItems = $('.article-item');

ul = articleItems.find('ul');

ul.remove;


/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val, h1;

    val = $('#input').val();
//     val =  $('div.articles h1').text(val);
 h1 = $('.articles').children('h1');
 h1.text(val);

 


});

