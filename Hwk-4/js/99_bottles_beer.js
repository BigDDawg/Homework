/**
 * Created by chrisdwyer on 10/21/16.
 */

/**
 * Created by chrisdwyer on 10/21/16.
 */


$(document).ready(function(){
    var $newHeader = $("<h1>").html("99 Bottles of Beer on the Wall.");
    var $newList = $("<ul>");
    $('div#container').append($newHeader);
    $('div#container').append($newList);
    var bottles99 = 99;
// This is passed into the loop and --bottles each time becomes less each time in the loop. So, it starts with 98, then
// does 97, 96.

    for (var bottle = 99; bottle > 0; bottle--) {
        if (bottle <= 99 && bottle > 2) {

            // bottle + " bottles of beer on the wall, " + bottle + " bottles of beer.\nTake one down and pass it around, "
            //     + --bottles99 + " bottles of beer on the wall.\n");

            $($newList).append("<li>"+bottle + " bottles of beer on the wall, " + bottle + " bottles of beer.\nTake one down and pass it around, "+
                --bottles99 + " bottles of beer on the wall.\n"+"</li>");

        }
        else if (bottle == 2) {
            $($newList).append("<li>"+bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. \nTake one down and pass it around. "
                + --bottles99 + " bottle of beer on the wall."+"<li>"+"1 bottle of beer on the wall. 1 bottle of beer." +
                " Take one down and pass it around, no more bottles of beer on the wall."+"<li>"+"No more bottles of beer on the wall, " +
                "no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall. "+"</li>");
        }

        else if (bottle < 2) {
            break;
        }
    }

    //
    // $('div#container').append($newList);
    // var $newLinks = $('<li>');
});


