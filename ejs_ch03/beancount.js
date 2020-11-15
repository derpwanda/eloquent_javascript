const countBs = function(string){
    let count = 0
    for (value in string) {
        if (string[value] == 'B'){
            count++
            // console.log(count)
        }
    }
    return count
}

console.log(countBs('BBC'))


// module.exports = beancount