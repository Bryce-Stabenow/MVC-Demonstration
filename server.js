const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// This section handles all routing. Requests are sent from the server to these files, listed above in lines 4 and 5
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running, you better catch it!')
})    