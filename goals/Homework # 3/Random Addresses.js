/**
 * Created by chrisdwyer on 10/21/16.
 */

Homework #2

Write a script that can generate random addresses

- As a first step, create arrays that contain dummy data for each

    of the following: street number, street name, city name, state

name and zip code

- Your script should randomly select one item from each of

these arrays and then use them to construct a random address.

    Each time you run the script, it should print a new randomlygenerated

address to the terminal. For example:

    - `node random-address.js`

    - `=> 34578 Dolphin Street, Wonka NY, 44506`

var myArray = ['January', 'February', 'March'];

var rand = myArray[(Math.random() * myArray.length) | 0]


var items = Array(523,3452,334,31, 5346);
var items = items[Math.floor(Math.random()*items.length)];

var arr = ['apple','cat','Adam','123','Zorro','petunia'];
var n = arr.length; var tempArr = [];


for ( var i = 0; i < n-1; i++ ) {

    // The following line removes one random element from arr
    // and pushes it onto tempArr
    tempArr.push(arr.splice(Math.floor(Math.random()*arr.length),1)[0]);
}

// Push the remaining item onto tempArr
tempArr.push(arr[0]);
arr=tempArr;

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2, 0, 'drum');
// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed
