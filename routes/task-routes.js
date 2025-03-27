const express = require('express');
const {addTask,getTasks, getTask, updateTask,deleteTask} = require('../controllers/taskController');

const router = express.Router();

router.post('/tasks', addTask);
router.get('/tasks',getTasks);
router.get('/gettask/:id',getTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports={
    routes: router
}