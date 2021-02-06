// build your `/api/projects` router here
const express = require('express');

const Project = require('../project/model');

const ProjectRouter = express.Router();

ProjectRouter.get('/', async (req, res, next) => {
    try {
        const project = await Project.find()
        res.json(project)
    } catch (err) {
        next(err)
    }
 })
 
 ProjectRouter.post('/', async (req, res, next) => {
   const projectData = req.body;
    try {
       const project = await Project.add(projectData) 
       res.json(project)
    } catch (err) {
        next(err)
     //    res.status(500).json({ message: 'Failed to create project' })
    }
 });

module.exports = ProjectRouter;