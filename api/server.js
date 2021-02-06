// build your server here

const express = require("express")
const helmet = require("helmet")

const server = express()

const ProjectRouter = require('../api/project/router');
const ResourceRouter = require('../api/resource/router');
const TaskRouter = require('../api/task/router');

server.use(helmet())
server.use(express.json());

server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something Went Wrong",
    })
})

module.exports = server;