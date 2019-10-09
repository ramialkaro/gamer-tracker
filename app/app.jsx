import React from 'react';
import ReactDOM from 'react-dom';
import NavComponentContainer from './app.navcomponent';


window.onload=function () {
	ReactDOM.render(<NavComponentContainer />,
		document.getElementById('appcontent')
	);
}