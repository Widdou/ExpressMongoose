const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

// ======================= DATA BASE ========================

mongoose.connect('mongodb://127.0.0.1:27017/Test_DB', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', (err) => {
	console.log(err)
})

db.once('open', () => {
	console.log('Database Connection Established')
})

// ====================== SERVER ============================

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 4000

// Import Routes
const EmployeeRoute = require('./routes/employee')
const TaskRoute = require('./routes/tasks')


app.use('/api/employee', EmployeeRoute)
app.use('/api/tasks', TaskRoute)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

