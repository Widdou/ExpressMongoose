const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.showAll)
router.get('/show', TaskController.show)
router.post('/add', TaskController.add)
router.post('/update', TaskController.update)

router.put('/', TaskController.update)
router.delete('/', TaskController.remove)

module.exports = router