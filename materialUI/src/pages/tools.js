import './index.js';
import './index.css';

/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/

export function start(){
     return alert("Are you ready to start?")     
}

export const help = "Need Help ?";

export const user = {  
  firstName: 'Buddy',
  lastName: 'Vaseashta',
  level: 'Level Two'
};

export const topics = {  
  lesson1: 'Elements',
  lesson2: 'Components',
  lesson3: 'Text Fields',
  lesson4: 'Buttons',
  test: 'Test Your Knowledge'
};

export function formatName(user) {
  if (user) {
    return user.firstName + ' ' + user.lastName;
  } else {
    return "Whoops, not a user.";
  } 
}

export function hello() {
  return "Hello " + user.firstName + ",";
}

export var methods = {
  localeTime: function() {
    return new Date().toLocaleTimeString()
  },
  localetDate: function() {
    return new Date().toLocaleDateString() 
  }
};

export function currentTime() {
   const theTime = "The current local time is " + methods.localeTime();
   return theTime;
 }

export function footer() {
  const note = formatName(user) + " viewed this page at " + methods.localeTime() + " on " + methods.localetDate() +".";
  return note;
}
