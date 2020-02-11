const cors = require ('cors')
const express = require ('express')
const app = express()


//settings
app.set('port', process.env.PORT ? process.env.PORT : '4000')

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/partners', require('./routes/partners'))

module.exports = app