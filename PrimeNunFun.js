/**
 * Created by chrisdwyer on 10/26/16.
 */

// From 1 to 1000 - what numbers are prime number - only divisible by 1 and itself.

// function checkPrimesInRange(max) {
//
//     for (var i = 1; i < max; i++) {
//
//         if (primed(i))  {
//
//             console.log(i);
//
//         }
//
//     }


// From 1 to 1000 - what numbers are prime number - only divisible by 1 and itself.

primedRange(30);



function primedRange(max) {
    for (var i = 0; i < max; i++) //Runs every number up to 30.
                                {
        if(primed(i)) /// Says if this number from the function below is primed we are going to console.log it.
                    {
            console.log(i);
        }
        function primed(val) {
            for (var j = 2; j < val; j++) {
                if (val % j == 0) {
                    return false;
                }
            }
            return true;
        }
    }
}

primed(7, 6, 50, 41, 11, 0);

function primed(val) {
    for (var j = 2; j < val; j++) {
        if (val % j == 0) {
            return false;
        }
    }
    return true;
}
















