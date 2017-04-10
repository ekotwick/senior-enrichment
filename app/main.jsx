'use strict'
import React from 'react'
// import {render} from 'react-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'


ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('main')
);

// render (
//   <Provider store={store}>
//     <Root/>
//   </Provider>,
//   document.getElementById('main')
// )