const {getAllHouses} = require('../models/houses')

const sendHomePage = (req, res, next) => {
  getAllHouses()
    .then(houses => {
      res.send(`<h1>${houses[1]}</h1>`)
    })
}

module.exports = {sendHomePage}