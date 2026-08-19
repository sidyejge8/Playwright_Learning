let numbers = [1,2,3,4];

//add to End
numbers.push(5);
console.log(numbers);

//Remove from End
numbers.pop(5);
console.log(numbers);

//add multiple element
numbers.push(100,200);
console.log(numbers);

//adding to beginning
numbers.unshift(0);
console.log(numbers);

//Remove from beginning
numbers.shift();
console.log(numbers);

//splice (Remove element at index)
numbers.splice(2, 2);
console.log(numbers);

numbers.splice(3,1,99);
console.log(numbers);