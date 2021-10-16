/*

Explanation:
Import the created model
Define the basic CRUD functions. 
	Which are Express middleweres with embedded Mongoose logic to interact with the DB
Export the controller methods

*/

const Employee = require('../models/Employee')

// Returns all the employees from the database
const index = (req, res, next) => {
	Employee.find()												// Mongoose promise to fetch data from the model
		.then(response => {
			res.json({
				response
			})
		})
		.catch(error => {
			res.json({
				message: "An error occured!"
			})
		})
}

// Show single Employee
// Return an specific document from the collection, based on the ID
const show = (req, res, next) => {
	let EmployeeID = req.body.employeeID

	Employee.findById(EmployeeID)
		.then(response => {
			res.json({
				response
			})
		})
		.catch(error => {
			console.log(error)
			res.json({
				message: "Couldn't find Employee or an error occurred"
			})
		})
}

const store = (req, res, next) => {

	console.log(req.body)

	let employee = new Employee({
		name: req.body.name,
		designation: req.body.designation,
		email: req.body.email,
		phone: req.body.phone,
		age: req.body.age
	})

	console.log('Saving...')

	employee.save()
		.then(response => {
			res.json({
				message: `Employee Added Successfully!\n${response}`
			})
		})
		.catch(error => {
			res.json({
				message: `An error Occured while saving!\n${error}`
			})
		})
}


const update = (req, res, next) => {
	let employeeID = req.body.employeeID

	let updateData = {
		name: req.body.name,
		designation: req.body.designation,
		email: req.body.email,
		phone: req.body.phone,
		age: req.body.age
	}

	Employee.findByIdAndUpdate(employeeID, { $set: updateData })
		.then(() => {
			res.json({
				message: 'Employee updated successfully'
			})
		})
		.catch(error => {
			res.json({
				message: 'An error Occured while updating!'
			})
		})
}


const destroy = (req, res, next) => {
	let employeeID = req.body.employeeID

	Employee.findByIdAndRemove(employeeID)
		.then(() => {
			res.json({
				message: 'Employee deleted successfully!'
			})
		})
		.catch(() => {
			res.json({
				message: `Error deleting employee ID: ${req.body.employeeID}`
			})
		})
}

module.exports = {
	index, show, store, update, destroy
}