import './index.js';
import './index.css';

/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/

export function hello() {
  return "Hello";
}

var sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));

var another = require('./index.js');
//another.data.timestamp();
//another.data.currentDate();

const testPerson = {  
  firstName: 'Bill',
  lastName: 'Johnson',
  level: 'Expert'
};

exports.data = another;
exports.data = testPerson;