const Task = require('../models/Task')

const add = (req, res, next) => {

	let task = new Task({
		title: req.body.title,
		description: req.body.description
	})


	task.save()
		.then(response => res.json('Task created successfully!'))
		.catch(error => {
			res.json({ message: error })
		})

}

const showAll = (req, res, next) => {
	Task.find()
		.then(response => {
			console.log(response.length)
			res.json({ response })

		})
		.catch(error => res.json(error))
}

const show = (req, res, next) => {
	let taskID = req.body.taskID

	Task.findById(taskID)
		.then(response => res.json(response))
		.catch(error => res.json(error))
}



const update = (req, res, next) => {
	let taskID = req.body.taskID

	updateData = {
		title: req.body.title,
		description: req.body.description
	}

	Task.findByIdAndUpdate(taskID, { $set: updateData })
		.then(response => res.json({ message: "Task successfully updated" }))
		.catch(error => res.json({ message: `Couldn't updated task`, error }))

}

const remove = (req, res, next) => {
	let taskID = req.body.taskID

	Task.findByIdAndRemove(taskID)
		.then(response => res.json({ message: response ? `Deleted successfully!` : 'Nothing was deleted' }))
		.catch(error => res.json({ message: `Couldn't delete task`, error }))
}

module.exports = {
	add, show, showAll, update, remove
}