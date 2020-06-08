const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is up on port ${PORT}!`))
