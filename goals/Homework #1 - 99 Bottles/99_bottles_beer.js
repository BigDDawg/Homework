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

var bottle99 =;

for (var bottle = 99; bottle > 0; bottle = bottle - 1) {
    if (bottle == 1) {
        bottle99 = "bottle";
    } else {
        bottle99 = "bottles";
    }
    if (bottle < 99) {
        console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down and pass it around,"
        + --bottle + " bottles of beer on the wall.");
    }

}


var bottles;
for (counter = 99; counter >= 1; counter = counter - 1)
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
}

// else -  Go to the store and buy some more, 99 bottles of beer on the wall.
// do you go backwards.
