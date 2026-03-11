const express = require('express')
const connectToDatabase = require('./utils/DB-connection')
const Expense = require('./models/expenseDb')
const expenseRoutes = require('./routes/expenseRoutes')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/expense',expenseRoutes)


app.listen(3000,async ()=>{
    console.log('Server is running on port 3000')
    await connectToDatabase();
})
