/*

Explanation:
Using Mongoose, define and schema with the fields for the collection,
then create a model with that schema to export it as a module

*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
	name: {
		type: String
	},
	designation: {
		type: String
	},
	email: {
		type: String
	},
	phone: {
		type: String
	},
	age: {
		type: Number
	}
}, { timestamps: true })

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee