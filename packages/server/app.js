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

app.get('/read', async function (req, res) {
	res.send(await database.read());
});
app.post('/add', async function (req, res) {
	res.send(await database.write(req.body.value));
});
app.put('/update', async function (req, res) {
	res.send(await database.update(req.body.value));
});
app.delete('/delete', async function (req, res) {
	res.send(await database.delete());
});
module.exports = app;
