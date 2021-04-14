const express = require('express')
const app = express()
const PORT = process.argv.PORT || 4000
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)


app.listen(PORT, () => {
  console.log('app running on port ', PORT)
})