import './index.css';

/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/

/********* Lesson ************/
/*Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. */
/********* Lesson ************/
class PersonLesson {
    constructor () {
        this.name = 'MaxPersonLesson';
    }
}
 
const personLesson = new PersonLesson();
console.log(personLesson.name); // prints 'MaxPersonLesson'
/*In the above example, not only the class but also a property of that class (=> name ) is defined.
The syntax you see there, is the "old" syntax for defining properties. 
In modern JavaScript projects you can use the following, more convenient way of defining class properties:*/
class PersonLesson1 {
    name = 'MaxPersonLesson1';
}
 
const personLesson1 = new PersonLesson1();
console.log(personLesson1.name); // prints 'MaxPersonLesson1'
/* You can also define methods. Either like this:*/
class PersonLesson2 {
    name = 'MaxPersonLesson2';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
 
const personLesson2 = new PersonLesson2();
personLesson2.printMyName();
/*Or like this:*/
class PersonLesson3 {
    name = 'MaxPersonLesson3';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const personLesson3 = new PersonLesson3();
personLesson3.printMyName();
/*The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.
You can also use inheritance when using classes:*/
class Human {
    species = 'human';
}
 
class PersonLesson4 extends Human {
    name = 'MaxPersonLesson4';
    printMyName = () => {
        console.log(this.name);
    }
}

const personLesson4 = new PersonLesson4();
personLesson4.printMyName();
console.log(personLesson4.species); // prints 'human'
/*Classes  **/

export function LessonTwo() {
 return alert("Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them.") 
}


