const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;
const json = [
    {
        "name": "shaik",
        "industry": "IT"
    },
    {
        "name": "caleb",
        "industry": "Content"
    },
    {
        "name": "roshan",
        "industry": "IT"
    }
];
app.get('/', (req, res) => {
    res.send("Hello there!");
});
app.get('/api/customers', (req, res) => {
    res.send({ "Fakedata": json });
});

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/', (req, res) => {
    res.send('This is a post request');
});



const start = async () => {
    try {
        await mongoose.connect(CONNECTION);
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`
            );

        });
    } catch (e) {
        console.log(e.message)
    }
};
start();
