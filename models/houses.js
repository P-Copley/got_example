function getAllHouses() {
  const houses = ['Stark', 'Lannister', 'Baratheon']
  return new Promise((resolve, reject) => {
    resolve(houses)
  })
}

module.exports = {getAllHouses}