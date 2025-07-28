
require('dotenv').config();
const express = require('express');


const app = express();

app.use(express.json());
app.use(express.static('views'));

const loginRoutes = require('./routes/login');
app.use('/api', loginRoutes);
const accountRoutes = require('./routes/account');
app.use('/api', accountRoutes);

app.get("/", (req, res) => {
    res.send("API is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

