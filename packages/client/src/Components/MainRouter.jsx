import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ContactForm from '../Pages/ContactForm';
import Home from '../Pages/Home';

const MainRouter = props => {
	return (
		<div className='container'>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/contact' exact component={ContactForm} />
					<Redirect to={'/'} />
				</Switch>
			</Router>
		</div>
	);
};
export default MainRouter;
