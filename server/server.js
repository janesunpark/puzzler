/** @format */

const express = require('express');
const PORT = process.env.PORT || 3001;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const fs = require('fs');
const path = require('path');




const app = express();

// app.use(express.static(path.join(__dirname, '../client/public')));




app.use(express.json());
app.use(express.urlencoded({ extended: false }));





app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/createAccount', (req, res) => {
    return res.sendFile(path.join(__dirname, '../createAccount.html'));
  });



app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
