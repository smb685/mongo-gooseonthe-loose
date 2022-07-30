const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { User } = require('./models')

app.post('/submit', ({body}, res) => {
    const user = new User(body);

    User.create(user)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/users', (req, res) => {
    User.find({}.then(user => {
        res.json(user);
    }));
});

app.listen(PORT, () => {
    console.log(`Connection! You are connected on port ${PORT}!`);
});