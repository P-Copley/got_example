const express = require('express');
const app = express()

app.set('view-engine', 'ejs')
express.static('public')

app.get('/', (req, res, next) => {
  res.render('home.ejs')
})

app.get('/houses/:house', (req, res, next) => {

  const {house} = req.params

  const words = {
    stark: 'Winter is coming',
    lannister: 'Hear me roar!'
  }

  const characters = {
    stark: ['ned', 'caitlynn', 'rob']
  }

  res.render('houses.ejs', {house, characters : characters[house] || [], words: words[house]})
})

app.get('/')

module.exports = app;
