const express = require('express');
const Joi = require('joi');

const router = express.Router();

// login schema
const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30).required(),
    password: Joi.string().trim().min(10).required()
});

router.get('/', (req, res) => {
    res.json({
        message: 'authentication'
    });
});

// POST route for signup
router.post('/signup', (req, res) => {
    // validate username
    const result = Joi.validate(req.body, schema);
    
    res.json({
        message: 'Signup'
    });
});

module.exports = router;