/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/


/********* Lesson ************/
/*Destructuring Object and Array*/
/********* Lesson ************/
/*Arrray Destructuring*/
let array = ['Hello','Max'];
console.log(array[1]);
console.log(array[2]);

const numberss = [1, 2, 3];
let [num1, ,num3] = numberss;
console.log(num1, num3);
/*Arrray Destructuring*/

/*Object Destructuring*/
let {name,age} = {name: 'Ankur', age: 33};
console.log(name);
console.log(age);
/*Arrray Destructuring*/


/********* Lesson ************/
/*Reference vs Primitive Type*/
/********* Lesson ************/
/*Primitive Type*/
const number = 1;

/*Reference Type*/
const num2 = number;
console.log(num2);

/*person the object is stored in memory and const person is a pointer to it*/
const person0 = {
  name: 'Ankur'
};
/*copy of pointer not object (could be an issue)*/
const secondPerson = person0;
person0.name = 'Manu';
console.log(secondPerson);

/*person the object is stored in memory and const person is a pointer to it*/
const person1 = {
  name: 'Ankur1'
};
/* use spread to copy the object and not the pointer to the object)*/
const secondPerson1 = {
  ...person1
};
secondPerson1.name = 'Manu1';
console.log(secondPerson1);


/********* Lesson ************/
/*Arrays*/
/********* Lesson ************/
const numbArray = [1,2,3];
const doubleNumArray = numbArray.map((num) =>{
  return num*2;
} );
console.log(numbArray);
console.log(doubleNumArray);

export function LessonFour() {
 return alert("Reference vs Primitive Types and Arrays!") 
}


