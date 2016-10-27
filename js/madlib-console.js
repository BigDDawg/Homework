//Have you ever heard someone describe a startup as being "Like Uber for puppies" or "Like Amazon for kittens"?
// In this exercise, you'll be building a website that auto-generates madlib sayings like "A startup that is `X` but for `Y`".

//Once the button is clicked, we need a new text node thats says X for Y. Start with create text node.

// When the button with an id of create is clicked.
// The saying will display in the H1 with and id of xForY.

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];

var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

//Two Variables will randomly select startup names from the arrays.
//The Math.floor() function returns the largest integer less than or equal to a given number.
var random1 = Math.floor((Math.random() * startupX.length));

var random2 = Math.floor((Math.random() * startupY.length));

// Function Onclick - When clicking the H1 button, your code will randomly generate one of these startups from these 2 arrays
// trigger back to here to run code to go back and display.

// A startup that is 'X', but for 'Y' out to the console.
console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
