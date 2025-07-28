
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('views'));

const authRoutes = require('./routes/login');
app.use('/api', authRoutes);
const accountRoutes = require('./routes/account');
app.use('/api', accountRoutes);

app.get("/", (req, res) => {
    res.send("API is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

