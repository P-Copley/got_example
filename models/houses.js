function getHouseByName(houseName) {
  return new Promise((resolve, reject) => {
    const words = {
      stark: 'Winter is coming',
      lannister: 'Hear me roar!'
    }
  
    const characters = {
      stark: ['ned', 'caitlynn', 'rob']
    }

    const data ={ house: houseName, words: words[houseName], characters: characters[houseName] || []  };

    resolve(data)
  })
}

module.exports = {getHouseByName}