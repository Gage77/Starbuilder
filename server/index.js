const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Starbuilder'
    });
});

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not found - ' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port', port);
});