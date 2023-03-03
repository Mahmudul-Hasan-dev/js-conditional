//number insert in array 
var numbers = [23, 12, 34, 56, 67, 78];

//push uses to insert element in last index of array
numbers.push(11);

console.log(numbers);

//delete last element from the array
numbers.pop();

//print after deleteing last number
console.log(numbers);

//store the element that deleted from array using pop
var deletedElement = numbers.pop();

//print the deleted element
console.log(deletedElement);

//print array after deleting the element
console.log(numbers);