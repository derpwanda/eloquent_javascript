// OBJECTS and ARRAYS

// the weresquirrel
// let listOfNumbers = [2, 3, 5, 7, 11]

// console.log(listOfNumbers[1])
// console.log(listOfNumbers["length"])
// console.log(listOfNumbers.length)

// let doh = "Doh"
// console.log(typeof doh.toUpperCase) //function
// console.log(doh.toUpperCase()) //DOH

// let sequence = [1, 2, 3]
// console.log(sequence) //[1, 2, 3]
// sequence.push(4) // array method: adds to END
// sequence.push(5)
// console.log(sequence) //[1, 2, 3, 4, 5]
// sequence.pop() // array method: removes last value and returns the value
// console.log(sequence) //[1, 2, 3, 4]

let day1 = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'running']
};

// console.log(day1.events)
// console.log("events" in day1) // in is a binary operator
// console.log("food" in day1)

// console.log(Object.keys(day1))  // to find out what properties an object has

// let objectA = {a: 1, b: 2}
// console.log(objectA)
// Object.assign(objectA, {b: 3, c: 4})
// console.log(objectA)

// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};

// console.log(object1 == object2);
// // → true
// console.log(object1 == object3);
// // → false
// object1.value = 15;
// console.log(object2.value);
// // → 15
// console.log(object3.value);
// // → 10

// const score = {visitors: 0, home: 0};
// // This is okay
// score.visitors = 1;

// // This isn't allowed
// // score = {visitors: 1, home: 1}; <<<

// console.log(score)

let journal = [];
console.log(journal)

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);

console.log("updated journal: \n", journal)