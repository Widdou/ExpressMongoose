const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
	taskID: Number,
	title: { type: String, required: true },
	description: String,
	status: Boolean,
	startDate: { type: Date, default: Date.now },
	finishedDate: Date,
	// subTasks: [this],
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task