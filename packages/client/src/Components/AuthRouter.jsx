import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from '../Pages/Auth';

const AuthRouter = props => {
	return (
		<Router>
			<div className='auth-container'>
				<Switch>
					<Route path='/' exact component={Auth} />
					<Redirect to={'/'} />
				</Switch>
			</div>
		</Router>
	);
};
export default AuthRouter;
