const isEven = (n) => {

    while (n >= 0){
        if ((n == 0)) {
            return true;
        } else if ((n == 1)) {
            return false;
        } else {
            return n = isEven(n - 2);
        }
    } return "Must be a positive integer."
};

module.exports = isEven;