const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const guestsRouter = require('./routes/guests');

app.use(cors());
app.use(express.json());

// Replace with your MongoDB URI
const uri = 'mongodb+srv://user:user@wedding-guests.ixp9orm.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/guests', guestsRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

