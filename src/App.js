import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './page/Home';
import Cart from './page/Cart';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path='/' render={() => <Home />} ></Route>
					<Route path='/cart' render={() => <Cart />}></Route>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
