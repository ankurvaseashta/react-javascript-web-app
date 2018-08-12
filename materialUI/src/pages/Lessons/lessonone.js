
/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/


/********* Lesson ************/
/*The 'let', 'const', & ES6 Arrow Functions */
/********* Lesson ************/
let myName = 'Ankur';
console.log("Welcome " + myName);

myName = 'AnkurTest';
console.log(myName);

const printMyName = (name, age) => {
  console.log(name, age);
}
printMyName('Max', 33);

const multiply = number => number * 2;
console.log(multiply(2));
/*ES6*/

/********* Lesson ************/
/*Destructuring*/
/********* Lesson ************/

/*Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:*/

const array1 = [1, 2, 3];
const [a, b] = array1;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array1); // prints [1, 2, 3]
/*And here for an object:*/

const myObj = {
    name1: 'Max',
    age1: 28
}
const {name1} = myObj;
console.log(name1); // prints 'Max'
console.log(myObj.age1); // prints 28
console.log(myObj); // prints {name: 'Max', age: 28}
/*Destructuring is very useful when working with function arguments. Consider this example:*/

const printName1 = (personObj) => {
    console.log(personObj.name1);
}
printName1({name1: 'MaxLastLesson', age1: 28}); // prints 'Max'
/*Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:*/

const printName = ({name1}) => {
    console.log(name1);
}
printName({name1: 'MaxLastLesson', age1: 28}); // prints 'Max')
/*We get the same result as above but we save some code. By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.*/



export function LessonOne() {
 var test =  "The 'let', 'const', ES6 Arrow Functions & Destructuring!" ;

return alert(test);
}