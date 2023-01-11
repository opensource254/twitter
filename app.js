require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const deprecated = require('./api/deprecated');
const ApiRouter = require('./api/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/twitter', deprecated);
app.use('/api/v1', deprecated);
app.use('/api/v2', deprecated);
app.use('/api/v3', ApiRouter)
app.get('*', (_req, res) => {
    res.status(404).json('This resource is not available. That\'s all we know 😢');
})

module.exports = app;
