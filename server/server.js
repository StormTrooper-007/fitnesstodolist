const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//bodyParser middleware
app.use(bodyParser.json())

//routes
const items = require('./routes/api/items')

const db = require('./config/keys').mongoURI

mongoose
.connect(db)
.then(() => console.log('DB connected...END'))
.catch(err => console.log(err))

app.use('/api/items', items)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`app is runing at ${port}`))