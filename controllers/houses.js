const {getHouseByName} = require('../models/houses')

const sendHouseByName = (req, res, next) => {
  const {house} = req.params
  getHouseByName(house)
    .then(houseData => {
      res.render('houses.ejs', houseData)
    })
}

module.exports = {sendHouseByName}