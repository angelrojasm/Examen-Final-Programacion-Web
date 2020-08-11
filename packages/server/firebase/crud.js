require('./config');
const firebase = require('firebase');

const database = firebase.database();

exports.write = value => {
	return new Promise((resolve, reject) => {
		database
			.ref('sample/')
			.set({
				value,
			})
			.then(() => {
				return resolve('Added Succesfully');
			})
			.catch(() => {
				return reject('error');
			});
	});
};

exports.read = () => {
	return new Promise((resolve, reject) => {
		database
			.ref('sample')
			.once('value')
			.then(function (snapshot) {
				return resolve(snapshot.val());
			});
	});
};

exports.update = newVal => {
	return new Promise((resolve, reject) => {
		database
			.ref('sample/')
			.update({ key: newVal })
			.then(() => {
				return resolve('Updated Succesfully');
			});
	});
};

exports.delete = () => {
	return new Promise((resolve, reject) => {
		database
			.ref('sample/')
			.set(null)
			.then(() => {
				return resolve('Deleted Succesfully');
			});
	});
};
