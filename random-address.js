/**
 * Created by chrisdwyer on 10/21/16.
 */
//Homework #2

//Write a script that can generate random addresses

// - As a first step, create arrays that contain dummy data for each

//   of the following: street number, street name, city name, state name and zip code

//
//- Your script should randomly select one item from each of

// these arrays and then use them to construct a random address.

//  Each time you run the script, it should print a new randomly generated

// address to the terminal. For example:

//    - `node random-address.js`
//    - `=> 34578 Dolphin Street, Wonka NY, 44506`


// Create an array for street numbers, street names, cities, states, and zip codes.
//

// Do a console.log and include all arrays in the strings, so each array index will display a random variable value
// streetNumber[Math.floor(Math.random()*streetNumber.length)] - this will run through the streetNumber array and give

// and generate a random street number.... Then do for all 4 other arrays and assign each one to a variable that you
// can use in console.log.

var streetNumber = [27, 5545, 548, 9836];
var streetNums = streetNumber[Math.floor(Math.random()*streetNumber.length)];

var streetName = ["Whitner Dr", "Peachtree Rd", "Roswell Rd", "Lenox Rd"];
var streetNams = streetName[Math.floor(Math.random()*streetName.length)];

var zipCodes = [30327, 30341, 30326, 30324,];
var zips = zipCodes[Math.floor(Math.random()*zipCodes.length)];

var cities = ["New York", "Chicago", "Birmingham", "Atlanta"];
var cityRan = cities[Math.floor(Math.random()*cities.length)];

var states = ["NY", "IL", "AL", "GA"];
var statesRan = states[Math.floor(Math.random()*states.length)];

console.log(streetNums + " " + streetNams + ", " + cityRan + " " + statesRan + ", " + zips);

//", " this will dispaly right after the value and a space after.