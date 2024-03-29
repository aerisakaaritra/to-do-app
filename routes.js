const express = require('express')
const { todosDB } = require('./controllers')
const router = express.Router()

router.route('/todos/:userEmail').get(todosDB)

module.exports = router