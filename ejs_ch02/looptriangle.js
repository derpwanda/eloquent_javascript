/*
    Write a loop that makes seven calls to console.log to output the following:
    #
    ##
    ###
    ####
    #####
    ######
*/
function loopTriangle(num) {
    let string = ''
    for (let i = 0; i < num; i++) {
        string += '#'
        console.log(string)
    }
}

loopTriangle(7)
