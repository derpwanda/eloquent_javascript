//Values, Types and Operators

/*
Values - chunks that represent pieces of information. Every value has a TYPE that determines its role. 
*/


// Types of Values:
/*  Numbers: numbers. limited to 64 bits. javascript numbers are always 64-bit floating point. whole numbers are called integers.
            decimals are called floats.
        Arithmetic Operators: ( +, -, *, /, % )
        Special Numbers:
                Infinity/-Infinity, 
                NaN (Not a Number): it IS a value of the number type. you'll get this result when you invoke any numeric operation that doesn't
                    yield a meaningful result. (Infinity - Infinity) or (0 / 0) */
                    console.log(Infinity - Infinity)
                    console.log(0/0)
/*  Strings: used to represent text. written by enclosing their content in quote( "", '', ``)
            \ - whenever a backslash in found inside quoted text, it means the character after it has special meaning.
                This is called `escaping a character`. */
//          \n - creates a new line
                console.log("A newline character is written like \"\\n\".")
                console.log("This is the first line\nAnd this is the second")
//          \t - creates a tab 
                console.log("A tab character is written like \"\\t\".")
                console.log("\tThis is a tabbed line.")
//          + - concatenate (joins strings together)
                console.log("con \+ cat \+ e \+ nate becomes: con" + "cat" + "e" + "nate")
//          template literal - `${}` - when you write something inside a template literal, its result will be computed,
//              converted into a sprint and included at that position 
                console.log(`half of 100 is ${100 / 2}`)

//      Unary Operators (only takes one value):
//          typeof - produces a string value naming the ype of the value you give it.
                console.log(typeof 5)
                console.log(typeof "x")
//            - to negate a Number
//            ! to negate logically

/*      
        Binary Operators (uses two values):
            +
            -
            *
            /
            % 
*/
            
/*  Boolean Values (only has two values: true or false):
        Ways to Produce Boolean Values:
        Comparison: (==, !=, ===, !==, <, >, <=, >=)
        Logical Operators: (&&, ||)
        Ternary Operator: (?:) also called a conditional operator
                the value on the left decides which of the other two values will return. when true chooses the middle value,
                when false, the value on the right */
                console.log(true ? 1 : 2)
                console.log(false ? 1 : 2)

/*  Empty Values (denotes the absence of meaningful value, values that carry no meaningful information):
        null
        undefined */
