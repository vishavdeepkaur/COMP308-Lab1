var express = require('express')
var app = express()
var path = require('path')

app.get('/home', function (req, res) {
  res.sendFile(path.resolve('./html/index.html'));
})

app.get('/about', function (req, res) {
  res.sendFile(path.resolve('./html/about.html'));
})

app.get('/contact', function (req, res) {
  res.sendFile(path.resolve('./html/contact.html'));
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})