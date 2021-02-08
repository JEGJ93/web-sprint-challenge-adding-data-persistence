// build your `/api/tasks` router here
const express = require('express')

const TaskRouter = express.Router()

const Task = require('../task/model')

TaskRouter.get('/', async (req, res, next) => {
    try {
        const task = await Task.find()
        const mutatedTasks = task.map(task => {return {...task, task_completed: task.task_completed ? true : false}})
        res.json(mutatedTasks)
    } catch (err) {
        next(err)
    }
 })

TaskRouter.post('/', async (req, res, next) => {
    const taskData = req.body;
     try {
        const task = await Task.add(taskData) 
        res.status(201).json({...task, task_completed: task.task_completed ? true : false })
     } catch (err) {
         next(err)
      //    res.status(500).json({ message: 'Failed to create project' })
     }
  });

module.exports = TaskRouter;