const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	name: String,
	title: String,
	description: String,
	date: String,
});

module.exports = mongoose.model('Task', taskSchema);