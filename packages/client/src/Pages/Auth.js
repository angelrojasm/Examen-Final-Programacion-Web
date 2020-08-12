import React, { useState, useEffect } from 'react';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import '../css/Auth.css';

const Auth = props => {
	const [hasAccount, setHasAccount] = useState(true);

	function toggleHasAccount() {
		setHasAccount(!hasAccount);
	}
	return (
		<div className='auth-container'>
			{hasAccount ? <Login toggle={toggleHasAccount} /> : <SignUp toggle={toggleHasAccount} />}
		</div>
	);
};
export default Auth;
