const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const url = 'mongodb://localhost/CBIT';
const app = express();

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;
con.on('open', () => {
    console.log('connected...');
});

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const alienRouter = require('./routes/aliens');
app.use('/aliens', alienRouter);

// Start the server
app.listen(9000, () => {
    console.log('Server started on port 9000');
});