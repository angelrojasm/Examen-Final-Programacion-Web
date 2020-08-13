const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const database = require('./firebase/crud');
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('../client/build'));
}
app.listen(process.env.PORT || port, () => {
	console.log('app is running on port ' + port);
});

app.get('/hello', function (req, res) {
	res.send('hello from Express!');
});

app.get('/getUser', async function (req, res) {
	res.send(await database.read(req.query.table, req.query.id));
});

app.get('/getAll', async function (req, res) {
	res.send(await database.getAll(req.query.table));
});

app.post('/add', async function (req, res) {
	let info = {
		name: req.query.name,
		lastname: req.query.lastname,
		email: req.query.email,
	};
	res.send(await database.write(req.query.table, req.query.id, info));
});
app.put('/update', async function (req, res) {
	res.send(await database.write(req.body.table, req.body.id, req.body.info));
});
app.delete('/delete', async function (req, res) {
	res.send(await database.delete(req.query.table, req.query.id));
});
module.exports = app;
