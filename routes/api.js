const express = require('express');
const housesRouter = require('./houses')
const apiRouter = express.Router();

apiRouter.use('/houses', housesRouter)

module.exports = apiRouter;