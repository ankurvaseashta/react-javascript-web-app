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

} if ( false ) {

ReactDOM.render(
	<Help />, 
	document.querySelector('#help'), 
	document.getElementById('#help'), 
	);

} else {

ReactDOM.render(
	<Index />,
	document.querySelector('#root'), 
	document.getElementById('#root'),
	);

}