import './index.js';
import './index.css';

/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/
export const help = "Need Help ?";

export const user = {  
  firstName: 'Ankur',
  lastName: 'Vaseashta',
  level: 'Level One'
};

export const topics = {  
  lesson1: 'Elements',
  lesson2: 'Components',
  lesson3: 'Text Fields'
};

export function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

export function hello() {
  return "Hello " + user.firstName + ",";
}

export var methods = {
  timestamp: function() {
    return new Date().toLocaleTimeString()
  },
  currentDate: function() {
    return new Date().toLocaleDateString() 
  }
};



