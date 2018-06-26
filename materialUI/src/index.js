import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import Help from './pages/help';


if( true ){

ReactDOM.render(
	<Index />,
	document.querySelector('#root'), 
	document.getElementById('#root'), 
	);

} else {

ReactDOM.render(
	<Help />, 
	document.querySelector('#root'), 
	document.getElementById('#root'), 
	);

}