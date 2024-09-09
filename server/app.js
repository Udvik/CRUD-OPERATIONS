const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const url = 'mongodb://127.0.0.1:27017/CBIT';
const app = express();

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true })); // `express.urlencoded` replaces `body-parser`
app.use(express.json()); // `express.json` replaces `body-parser`

// Routes
const alienRouter = require('./routes/controller');
app.use('/aliens', alienRouter);

// Start the server
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
