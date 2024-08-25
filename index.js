const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongoURI = "mongodb://pavr0606:12345@cluster0-shard-00-00.y1wel.mongodb.net:27017,cluster0-shard-00-01.y1wel.mongodb.net:27017,cluster0-shard-00-02.y1wel.mongodb.net:27017/?ssl=true&replicaSet=atlas-dqi3wd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const userId = "Papudippu_AdityavardhanReddy_15062004"; 
    const email = "pavr.0606@gmail.com"; 
    const rollNumber = "21BDS0107"; 
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().reverse()[0] || null;

    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
