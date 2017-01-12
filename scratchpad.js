/*
13_sumAllOdd.js
---------------

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are [1, 1, 3, 5].

sumFibs(10) should return 10. [1, 1, 3, 5]
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
----------------------------------
x % 2 == 0 -- Even
x % 2 == 1 -- Odd

PLAN OF ACTION:
- make array1 of fibonacci sequence < or = to num.
- filter into array2 all odd numbers from array1.
- add all numbers in array2 together for solution.

*/

