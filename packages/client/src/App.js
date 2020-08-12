import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainRouter from './Components/MainRouter.jsx';
import AuthRouter from './Components/AuthRouter.jsx';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const [Key, setKey] = useState(false);

	useEffect(() => {
		if (window.localStorage.getItem('user')) {
			setIsLoggedIn(true);
			setLoading(false);
		} else {
			setLoading(false);
		}
	});
	if (loading) {
		return <>Loading...</>;
	} else {
		return <>{isLoggedIn ? <MainRouter /> : <AuthRouter />}</>;
	}
}

export default App;
