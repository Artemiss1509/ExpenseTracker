const db = require('../utils/DB-connection')
const Expense = require('../models/expenseDb')

const getExpenses = async(req,res)=>{
    try {
        const expenses = await Expense.findAll()
        res.json(expenses)
    } catch (error) {
        console.log(error)
    }
}

const addExpense = async(req,res)=>{
    try {
        const expense = await Expense.create(req.body)
        res.json(expense)
    } catch (error) {
        console.log(error)
    }
}

const deleteExpense = async(req,res)=>{
    try {
        const delId = req.params.id
        const expense = await Expense.findByPk(delId)
        if(!expense){
            return res.status(404).json({message: 'Expense not found'})
        }
        await expense.destroy()
        res.json(`${delId} has been deleted from the expense`)
    } catch (error) {
        console.log(error)
    }
}

const getExpenseId = async(req,res)=>{
    try {
        const expense = await Expense.findByPk(req.params.id)
        res.json(expense)
    } catch (error) {
        console.log(error)
    }
}



module.exports = {getExpenses,addExpense,deleteExpense,getExpenseId}