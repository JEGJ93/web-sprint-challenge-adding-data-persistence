// build your `/api/resources` router here
const express = require('express')

const Resource = require('../resource/model')

const ResourceRouter = express.Router()

ResourceRouter.get('/', async (req, res, next) => {
    try {
        const resource = await Resource.find()
        res.json(resource)
    } catch (err) {
        next(err)
    }
 })

 ResourceRouter.post('/', async (req, res, next) => {
    const resourceData = req.body;
     try {
        await Resource.add(resourceData) 
        res.json({"resource_name": resourceData.resource_name})
     } catch (err) {
         next(err)
      //    res.status(500).json({ message: 'Failed to create project' })
     }
  });

module.exports = ResourceRouter;