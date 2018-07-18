import React from 'react';
import './index.js';
import './index.css';

/*
Comments: Level {} React JavaScript App: Implementing Google's Material UI Design in 2018
*/

/* Functional Component */
export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
    return <GuestGreeting />;
}

export function UserGreeting(props) {
  return <a> Welcome back! </a>;
}

export function GuestGreeting(props) {
  return <a> Please log in. </a>;
}

export function start(){
     return alert("Are you ready to start?");     
}

export const user = {  
  firstName: 'Buddy',
  lastName: 'Vaseashta',
  level: 'React 101'
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
   const theTime = " it's " + methods.localeTime();
   return theTime;
 }

export function footer() {
  const note = formatName(user) + " last viewed this page at " + methods.localeTime() + " on " + methods.localetDate() +".";
  return note;
}


export function clickButton(props) {
  return (
    <button className="indent" onClick={props.onClick}> Clicked </button>
  );
}

export function unclickButton(props) {
  return (
    <button className="indent" onClick={props.onClick}> Unclicked </button>
  );
}