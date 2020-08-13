const firebase = require('firebase/app');
require('firebase/auth');

exports.signUp = async (email, password) => {
	try {
		let user = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(function (error) {
				return { result: false };
			});
	} catch (error) {
		return { result: false };
	}
	if (firebase.auth().currentUser === null) {
		return { result: 'incorrect format' };
	} else {
		return { result: firebase.auth().currentUser.email };
	}
};

exports.login = async (email, password) => {
	let user = await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch(function (error) {
			return error;
		});

	if (firebase.auth().currentUser === null) {
		return { result: false };
	} else {
		return { result: firebase.auth().currentUser.email };
	}
};

exports.logout = async () => {
	await firebase.auth().signOut();
	return 'Logged Out Succesfully!';
};

exports.getUserToken = async () => {
	const user = firebase.auth().currentUser;
	if (user === null) {
		return null;
	} else {
		const token = await user.xa;
		return token;
	}
};
