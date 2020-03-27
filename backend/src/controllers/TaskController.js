const Task = require('../modals/Task');

module.exports = {

	async index (req, res) {
		const tasks = await Task.find();

		return res.json(tasks);
	},

	async store (req,res) {
	
	const { name, title, description, date } = req.body;

	let taskCount = await Task.findOne({ title });

		if(!taskCount) {
		
			taskCount = await Task.create({
				name,
				title,
				description,
				date,
			});
		}

		return res.json(taskCount);
	},

	async update (req, res) {

		const { _id } = req.params;
			
		const idTask = await Task.findOne({ _id });

		if(idTask) {

			const { title, description, name } = req.body;

			await Task.updateOne({_id},{
				title,
				description,
				name
			});

		} 

		return res.json(idTask);

	},

	async destroy (req, res) {

		const { _id } = req.params;

		const idTask = await Task.findOne({ _id });

		if(idTask) {

			const taskData = await Task.deleteOne(idTask);

		}

		return res.json(idTask);

	}
}