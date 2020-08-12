require('./config');
const firebase = require('firebase');

const database = firebase.database();

exports.write = (table, id, info) => {
	return new Promise((resolve, reject) => {
		database
			.ref(`${table}/${id}`)
			.set({
				info,
			})
			.then(() => {
				return resolve('Added Succesfully');
			})
			.catch(() => {
				return reject('error');
			});
	});
};

exports.read = (table, id) => {
	return new Promise((resolve, reject) => {
		database
			.ref(`${table}/${id}`)
			.once('value')
			.then(function (snapshot) {
				return resolve(snapshot.val().info);
			});
	});
};

exports.getAll = table => {
	return new Promise((resolve, reject) => {
		database
			.ref(`${table}`)
			.once('value')
			.then(function (snapshot) {
				return resolve(snapshot.val());
			});
	});
};

exports.update = (table, id, data) => {
	return new Promise((resolve, reject) => {
		database
			.ref(`${table}/${id}`)
			.update({ data })
			.then(() => {
				return resolve('Updated Succesfully');
			});
	});
};

exports.delete = (table, id) => {
	return new Promise((resolve, reject) => {
		database
			.ref(`${table}/${id}`)
			.set(null)
			.then(() => {
				return resolve('Deleted Succesfully');
			});
	});
};
