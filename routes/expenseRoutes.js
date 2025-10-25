const express = require('express')
const routes = express.Router()
const expenseController = require('../controller/expenseController')
const e = require('express')



routes.get('/',expenseController.getExpenses)
routes.post('/',expenseController.addExpense)
routes.delete('/:id',expenseController.deleteExpense)
routes.get('/:id',expenseController.getExpenseId)


module.exports = routes;