const express = require('express');
const {addUser,getUser} = require('../controllers/userController');

const router = express.Router();

router.post('/users', addUser);
router.get('/users/:email',getUser);


module.exports={
    routes: router
}