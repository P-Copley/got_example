const express = require('express');
const {sendHouseByName} = require('../controllers/houses')
const housesRouter = express.Router();

housesRouter.get('/:house', sendHouseByName)

module.exports = housesRouter;