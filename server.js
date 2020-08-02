const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routerAuth = require('./routes/auth')
const routerLists = require('./routes/lists')
const cors = require('cors');

const app = express()

app.use(cors());

app.use(express.json())

app.use('/auth', routerAuth)
app.use('/lists', routerLists)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection
db.on('error', function (err) {
  console.log('Connection with MongoDB error:', err.message)
})
db.once('open', function () {
  console.log("MongoDB database connected successfully!!!")
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
