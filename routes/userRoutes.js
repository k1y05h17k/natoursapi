const express = require('express');

const getAllUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route not yet defined!'
    });
};

const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route not yet defined!'
    });
};

const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route not yet defined!'
    });
};

const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route not yet defined!'
    });
};

const deleteUser = (req, res) => {
    res.status(500).json({
        status: error,
        message: 'This route not yet defined!'
    });
};

const router = express.Router();

router.route('/')
.get(getAllUser)
.post(createUser);

router.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser)

module.exports = router;
