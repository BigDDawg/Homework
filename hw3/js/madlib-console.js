//Have you ever heard someone describe a startup as being "Like Uber for puppies" or "Like Amazon for kittens"?
// In this exercise, you'll be building a website that auto-generates madlib sayings like "A startup that is `X` but for `Y`".

//Once the button is clicked, we need a new text node thats says X for Y. Start with create text node.

// When the button with an id of create is clicked.
// The saying - X for Y will display in the H1 with and id of xForY.

// Two Variables will randomly select startup names from the arrays.
// The Math.floor() function returns the largest integer less than or equal to a given number.


// Need to create a text node.
// A startup that is 'X', but for 'Y' out to the console.


// Function onclick - When clicking the H1 button, your code will randomly generate one of these startups from these 2 arrays.
// trigger back to here to run code to go back and display  - i.e. A startup that is Google, but for Hyperloop..
// Have to pass values back to each array after each loop.


var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];

var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'GE'];


function newTitle() {
    var random1 = startupX[Math.floor((Math.random() * startupX.length))];
    // this equals 5 or to 0 - one less than the length.

    var random2 = startupY[Math.floor((Math.random() * startupY.length))];
    var txtNode = document.createTextNode("A startup that is " + random1 + ", but for " + random2 + ". ");
    document.getElementById("XForY").appendChild(txtNode);

};



// ## Stretch Goals

// Were you able to meet the minimum requirements for the exercise? Want an additional challenge?
// Here are two more features you can implement in your JavaScript:
//
// * Add functionality to make the "Favorite Startup" button work--when the "Favorite Startup"
// button is clicked, it should save that madlib saying to an array.
//
// * Add functionality to make the "Print favorites" button work--when the "Print favorites" button is clicked,
// it should display all of the favorited startups in the array underneath the h2 with an ID of `favorites`.
//


function newArrFavStartups() {
    var favStarts = [];
    document.getElementById("XForY").favStarts.push();
    function printFav() {
        var printFavorites = document.createTextNode(favStarts);
        document.getElementById("favorites").appendChild(txtNode);
    };
};







