const Expense = require('../models/expenseDb')

const getExpenses = async(req,res)=>{
    try {
        const expenses = await Expense.find()
        res.json(expenses)
    } catch (error) {
        console.log(error)
    }
}

const addExpense = async(req,res)=>{
    try {
        const expense = await Expense.create({
            name: req.body.name,
            amount: req.body.amount,
            category: req.body.category
        })
        res.json(expense)
    } catch (error) {
        console.log(error)
    }
}

const deleteExpense = async(req,res)=>{
    try {
        const delId = req.params.id
        const expense = await Expense.findByIdAndDelete(delId)
        if(!expense){
            return res.status(404).json({message: 'Expense not found'})
        }
        
        res.json(`${delId} has been deleted from the expense`)
    } catch (error) {
        console.log(error)
    }
}

const getExpenseId = async(req,res)=>{
    try {
        const expense = await Expense.findById(req.params.id)
        if(!expense){
            return res.status(404).json({message: 'Expense not found'})
        }
        res.json(expense)
    } catch (error) {
        console.log(error)
    }
}



module.exports = {getExpenses,addExpense,deleteExpense,getExpenseId}