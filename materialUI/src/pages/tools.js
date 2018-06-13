import './index.js';
import './index.css';

/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/
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
  lesson4: 'Checkboxes'
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
   const theTime = "The current local time is " + methods.localeTime() + " on " + methods.localetDate() +".";
   return theTime;
 }

export function footer() {
  const note = formatName(user) + " viewed this page at " + methods.localeTime();
  return note;
}

