/*
    Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions:
        For numbers divisible by 3, print "Fizz"
        For numbers divisible by 5, print "Buzz"
        For numbers divisible by 15, print "FizzBuzz"
*/

function FizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 == 0) {
            console.log("Fizz Buzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

FizzBuzz(15)


// book solution
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }