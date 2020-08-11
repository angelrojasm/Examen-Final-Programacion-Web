import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [message, setMessage] = useState(null);

	async function getHelloMessage() {
		let message = await fetch('/read');
		let result = await message.json();
		setMessage(result.value);
	}

	useEffect(() => {
		getHelloMessage();
	}, []);

	return <>{message === null ? 'Loading...' : message}</>;
}

export default App;
