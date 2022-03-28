// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
const items = ['item1', 'item2', 'item3'];
// const numbers = new Set(1,2,3,4);
// console.log(numbers);

const numbers = new set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);

//some opeartion 
if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}

// for of in set

for(let number of numbers){
    console.log(number);
}

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;

for(let element of uniqueElements){
    length++;
}

console.log(length);