const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env variables using dotenv

dotenv.config({path: './config/config.env'});

const app = express();

//Enable cors
app.use(cors());

//Body parser middleware
app.use(express.json());

//connecting to the mongodb

connectDB();

//Routes

app.use('/api/v1/stores', require('./routes/stores'));

app.post('/', (req, res) => {
    res.status(200).json({
        data: req.body,
        success: true
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server is up and running on ${process.env.NODE_ENV} on ${process.env.PORT}`));
