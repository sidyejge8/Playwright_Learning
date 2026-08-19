let nums = [10,20,30,40];

//find - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
let results = nums.find(temp => temp > 30);
console.log(results);

//findIndex - Returns the index of the first element in the array where predicate is true, and -1 otherwise.
let index = nums.findIndex(n => n>30);
console.log(index);

//findLast - Returns the value of the last element in the array where predicate is true, and undefined otherwise.
let findLast = nums.findLast(p => p>20);
console.log(findLast);

//findLastIndex - Returns the index of the last element in the array where predicate is true, and -1 otherwise.
let findLastIndex = nums.findLastIndex(s => s>30);
console.log(findLastIndex);