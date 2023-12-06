//Part3 Ex1

//1- Object.keys(obj): This method returns an array containing the keys of the specified object obj.
//It allows us to extract the keys of an object and use them for further operations.
const obj1 = { name: 'John', age: 25 };
const keys = Object.keys(obj1);
console.log(keys); // Output: ['name', 'age']
//--------------------------------------------------------------------------------------------------------------

//2-Object.values(obj): Similar to Object.keys(), this method returns an array containing the values of the specified object obj.
//It allows us to extract the values of an object and use them for further operations.
const obj2 = { name: 'John', age: 25 };
const values = Object.values(obj2);
console.log(values); // Output: ['John', 25]
//--------------------------------------------------------------------------------------------------------------

//3-Object.entries(obj): This method returns an array of arrays, where each inner array contains a key-value pair from the specified object obj. 
//It allows us to iterate over both keys and values of an object.
const obj3 = { name: 'John', age: 25 };
const entries = Object.entries(obj3);
console.log(entries); // Output: [['name', 'John'], ['age', 25]]
//--------------------------------------------------------------------------------------------------------------

//4-Object.assign(target, source1, source2, ...): This method copies the values of all enumerable properties from one or more source objects to a target object. 
//It allows us to merge multiple objects into one.
const target = { name: 'John' };
const source = { age: 25 };
const merged = Object.assign(target, source);
console.log(merged); // Output: { name: 'John', age: 25 }
//--------------------------------------------------------------------------------------------------------------

//5-Object.freeze(obj): This method freezes an object, preventing any modifications to its properties. 
//It ensures that the object remains immutable.
const obj5 = { name: 'John', age: 25 };
Object.freeze(obj5);
obj5.age = 30; // This assignment will be ignored
console.log(obj5); // Output: { name: 'John', age: 25 }
//--------------------------------------------------------------------------------------------------------------

//6-Object.seal(obj): This method seals an object, preventing the addition or deletion of properties. 
//However, it allows the modification of existing properties.
const obj6 = { name: 'John', age: 25 };
Object.seal(obj6);
obj6.age = 30; // This modification is allowed
obj6.city = 'New York'; // This addition will be ignored
console.log(obj6); // Output: { name: 'John', age: 30 }
//--------------------------------------------------------------------------------------------------------------

//7-Object.hasOwnProperty(prop): This method checks if an object has a specific property prop. 
//It returns true if the property exists directly on the object, and false otherwise.
const obj7 = { name: 'John', age: 25 };
console.log(obj7.hasOwnProperty('name')); // Output: true
console.log(obj7.hasOwnProperty('city')); // Output: false

//--------------------------------------------------------------------------------------------------------------

//8-Object.getOwnPropertyNames(): This method returns an array of all properties (including non-enumerable properties) found directly in a given object.
const obj8 = { name: 'John', age: 25 };
const properties = Object.getOwnPropertyNames(obj8);
console.log(properties); // Output: ['name', 'age']
//--------------------------------------------------------------------------------------------------------------

//9-Object.setPrototypeOf(): This method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
const obj9 = {};
const prototypeObj9 = { name: 'John' };
Object.setPrototypeOf(obj9, prototypeObj9);
console.log(obj9.name); // Output: 'John'
//--------------------------------------------------------------------------------------------------------------

//10-Object.isPrototypeOf(): This method checks if an object exists in another object's prototype chain.
const prototypeObj10 = { name: 'John' };
const obj10 = Object.create(prototypeObj10);
console.log(prototypeObj10.isPrototypeOf(obj10)); // Output: true





//_________________________________________________________________________________________
//Part3 Ex2

//1- push(): The push() method adds one or more elements to the end of an array and returns the new length of the array. For example:
const fruits1 = ['apple', 'banana'];
fruits1.push('orange');
console.log(fruits1); // Output: ['apple', 'banana', 'orange']
//--------------------------------------------------------------------------------------------------------------

//2- pop(): The pop() method removes the last element from an array and returns that element. It modifies the original array. For example:
const fruits2 = ['apple', 'banana', 'orange'];
const removedFruit2 = fruits2.pop();
console.log(removedFruit2); // Output: 'orange'
console.log(fruits2); // Output: ['apple', 'banana']
//--------------------------------------------------------------------------------------------------------------

//3- shift(): The shift() method removes the first element from an array and returns that element. It also modifies the original array. For example:
const fruits3 = ['apple', 'banana', 'orange'];
const removedFruit3 = fruits3.shift();
console.log(removedFruit3); // Output: 'apple'
console.log(fruits3); // Output: ['banana', 'orange']
//--------------------------------------------------------------------------------------------------------------

//4- unshift(): The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. For example:
const fruits4 = ['banana', 'orange'];
fruits4.unshift('apple');
console.log(fruits4); // Output: ['apple', 'banana', 'orange']
//--------------------------------------------------------------------------------------------------------------

//5- concat(): The concat() method is used to merge two or more arrays. It does not modify the original arrays but returns a new array. For example:
const fruits5_1 = ['apple', 'banana'];
const fruits5_2 = ['orange', 'grape'];
const mergedFruits = fruits5_1.concat(fruits5_2);
console.log(mergedFruits); // Output: ['apple', 'banana', 'orange', 'grape']
//--------------------------------------------------------------------------------------------------------------

//6- slice(): The slice() method returns a shallow copy of a portion of an array into a new array. 
//It takes two arguments: the starting index and the ending index (exclusive). For example:
const fruits6 = ['apple', 'banana', 'orange', 'grape'];
const slicedFruits = fruits6.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'orange']
//--------------------------------------------------------------------------------------------------------------

//7- splice(): The splice() method changes the contents of an array by removing, replacing, or adding elements.
// It modifies the original array and returns the removed elements as a new array. For example:
const fruits7 = ['apple', 'banana', 'orange', 'grape'];
const removedFruits = fruits7.splice(1, 2, 'kiwi', 'melon');
console.log(removedFruits); // Output: ['banana', 'orange']
console.log(fruits7); // Output: ['apple', 'kiwi', 'melon', 'grape']
//--------------------------------------------------------------------------------------------------------------

//8- indexOf(): The indexOf() method returns the first index at which a given element can be found in an array, or -1 if it is not present. For example:
const fruits8 = ['apple', 'banana', 'orange', 'grape'];
const index = fruits8.indexOf('orange');
console.log(index); // Output: 2
//--------------------------------------------------------------------------------------------------------------

//9- includes(): The includes() method determines whether an array includes a certain element and returns true or false. For example:
const fruits9 = ['apple', 'banana', 'orange', 'grape'];
const includesOrange = fruits9.includes('orange');
console.log(includesOrange); // Output: true
//--------------------------------------------------------------------------------------------------------------

//10- forEach(): The forEach() method executes a provided function once for each array element. For example:
const fruits10 = ['apple', 'banana', 'orange', 'grape'];
fruits10.forEach((fruit) => {
  console.log(fruit);
});
// Output:
// 'apple'
// 'banana'
// 'orange'
// 'grape'





//_________________________________________________________________________________________
//Part3 Ex3

//1- Nested Functions: In JavaScript, it is possible to define a function inside another function. This is known as a nested function. 
//The nested function has access to the variables and parameters of the outer function, as well as the global scope.

//2- Closure: A closure is created when a nested function accesses variables from its outer function, even after the outer function has finished executing.
//This means that the nested function "remembers" the variables and their values from the outer function's scope. 
//The closure allows the nested function to maintain access to these variables, even if they are not in scope anymore.

//3- Lexical Environment: The lexical environment refers to the context in which a piece of code is executed. 
//It consists of the variables, functions, and their scopes that are available at a particular point in the code. 
//Each time a function is called, a new lexical environment is created.

//4-Example:

function outerFunction() {
  let outerVariable = 'Hello';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let closureFunction = outerFunction();
closureFunction(); // Output: Hello

//In this example, we have an outer function called outerFunction that defines a variable outerVariable and a nested function called innerFunction. 
//The innerFunction has access to the outerVariable due to closure.

//5- Explanation: When outerFunction is called and assigned to the variable closureFunction, it returns the innerFunction.
// Even though outerFunction has finished executing, the innerFunction still has access to the outerVariable through closure.
// When closureFunction is called, it logs the value of outerVariable, which is "Hello".

//6- Benefits of Closure: Closure allows us to create private variables and functions in JavaScript. 
//By encapsulating variables and functions within a closure, we can control their access and prevent them from being modified or accessed from outside the closure.