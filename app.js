const express = require('express')
const app = express()
const compression = require('compression')

app.use(express.static('./dist'))
app.use(compression()) // response压缩 

module.exports = app.listen(8081, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server Running on http://hammer.hasakeyi66.com')
  }
})