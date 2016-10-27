/**
 * Created by chrisdwyer on 10/21/16.
 */

/* Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" via console.log().
Lyrics - http://www.99-bottles-of-beer.net/lyrics.html
Make sure your program can handle both singular and plural cases
(i.e. both "100 bottles of beer" and "1 bottle of beer”)  */

// Lyrics of the song 99 Bottles of Beer
//
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// do you go backwards.

// Create a variable.

var bottles99 = 99;
// This is passed into the loop and --bottles each time becomes less each time in the loop. So, it starts with 98, then
// does 97, 96.

for (var bottle = 99; bottle > 0; bottle--) {
    if (bottle <= 99 && bottle > 2) //// bottle > 2 makes sure this doesn't execute before the else if below....Since
    // Javascript executes line by line //
    {
        console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer.\nTake one down and pass it around, "
            + --bottles99 + " bottles of beer on the wall.\n");
    } else if (bottle == 2) {
        console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer.\nTake one down and pass it around, "
            + --bottles99 + " bottle of beer on the wall. \n\n1 bottle of beer on the wall. 1 bottle of beer.\n" + "Take one down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall. ");
    } else if (bottle < 2) {
        break;
    }
}
