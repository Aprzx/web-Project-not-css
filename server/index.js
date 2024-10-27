const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

// database connect
mongoose.connect('mongodb+srv://sommanaaum:12345@cluster0.jdktf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log('Server is running on port : ' + port )) 