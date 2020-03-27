const { Router } = require('express');
const TaskController = require('./controllers/TaskController');

const routes = Router();


routes.get('/geeks', TaskController.index);	
routes.post('/geeks', TaskController.store);
routes.put('/geeks/:_id', TaskController.update);	
routes.delete('/geeks/:_id', TaskController.destroy);	



module.exports = routes;






//const geeks = [];

// routes.get('/', (req, res) => {
// 	return res.json({ message: "Falaa meeen" });
// });

// routes.get('/geeks', (req, res) => {
// 	return res.json(geeks);
// });

// routes.get('/geeks:index', (req, res) => {
// 	return res.json(req.user)
// });

// routes.post('/geeks', (req, res) => {
// 	const { name } = req.body;
// 	geeks.push(name);
// 	return res.json(geeks);
// });

// routes.put('/geeks/:index', (req, res) => {
// 	const { index } = req.params;
// 	const { name } = req.body;

// 	geeks[index] = name;

// 	return res.json(geeks);
// });

// routes.delete('/geeks/:index', (req, res) => {
// 	const { index } = req.params;

// 	geeks.splice(index, 1);

// 	res.send();

// 	return res.json(geeks);
// });
