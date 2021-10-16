/*

Explanation:
Get the Express library to create a router object
Import the Controller with the middleweres functions
Add the desired routes with their methods and middleware functions
Export the router so it can be used directly on the server for a route

*/

const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')

router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store', EmployeeController.store)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)

module.exports = router