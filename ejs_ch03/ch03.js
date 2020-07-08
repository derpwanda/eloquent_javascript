//chapter 3 exercises
//completed reading 


function min(x, y){
    if (x <= y){
        return x;
    } else {
        return y
    }
}

console.log(min(6, 8))
console.log(min(18, 6))
console.log(min(1, 1))
console.log(min(5, 37))

module.exports = min;