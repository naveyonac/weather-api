const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(parser.json())
app.use(require('./Routes/indexRoutes'))

app.set('port', process.env.PORT || 1000)

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')}`)
})