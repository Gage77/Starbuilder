const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'authentication'
    });
});

router.post('/signup', (req, res) => {
console.log('body', req.body);

    res.json({
        message: 'Signup'
    });
});

module.exports = router;