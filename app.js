const express = require('express');
const app = express()
const apiRouter = require('./routes/api')

app.set('view-engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.render('home.ejs')
})

app.use('/api', apiRouter)

module.exports = app;
