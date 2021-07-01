// INTRODUCTION

Given an array of length >= 0 and a positive integer N, the function should return the contents of the array divided into the N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.

// SET UP

Clone or download the repository to a desired location. In terminal, navigate to the new folder that is a clone of the repo and run "npm install".

// USING THE FUNCTION

To run the function you must use node. In your terminal, run "node twig.js", this should print the result of the function. You can change the arguments of the function via lines 1 and 2 in twig.js

// RUNNING THE TESTS

Tests are run using Jest. To run the test, simply run "npm test" in terminal

// ASSUMPTIONS

When the array length cannot be divided equally by N, the function will round upwards to the nearest int. This means that, in this scenario, the function never returns the number of elements within the result array that is greater than N.

For example:

argOne = [1, 2, 3, 4, 5]
argTwo = 4

result of function = [ [1, 2], [3, 4], [5] ]

If the array length can then be divided equally rounded number, then the result will produce equal array elements.

For example:

argOne = [1, 2, 3, 4, 5, 6]
argTwo = 4

result of function = [ [1, 2], [3, 4], [5, 6] ]
