/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/

/********* Lesson ************/
/*Spread Operator */
/********* Lesson ************/
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
  name: 'Ankur'
}

const newPerson = {
  ...person,
  age: 33
}

console.log(newPerson);
/*Spread Operator*/

/********* Lesson ************/
/*Rest Operator*/
/********* Lesson ************/
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));
/*Rest Operator*/
/*Spread & Rest Operator
The spread and rest operators actually use the same syntax: ... 
Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.
Using the Spread Operator:
The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:*/
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
/*Here's the spread operator used on an object:*/
console.log(newArray);

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
console.log(oldObject);
console.log(newObject);
/*The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array. */


export function LessonThree() {
 return alert("Spread & Rest Operators!") 
}


