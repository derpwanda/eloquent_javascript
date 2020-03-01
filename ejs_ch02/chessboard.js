/* 
    Write a program that creates a string that represents and 8 X 8 grid, using new line character to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.
        Passing this string to console.log should show something like this:
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #

    When you have a program that generates this patter, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/


let chessboard = "" // starts empty string
let size = 10

// j loop adds the new line character to string after each i loop
for (let j = 0; j < size; j++) {
    // i loop creates a single line
    for (let i = 0; i < size; i++) {
        // uses the sum of both axis to determine character to be added
        if ((i + j) % 2 == 0) {
            // add a space to string
            chessboard += " ";
        } else {
            // add a hashtag to string
            chessboard += "#"
        }
    }
    chessboard += '\n'
}
console.log(chessboard)