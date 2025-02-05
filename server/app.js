if (process.env.NODE_ENV != "production") require("dotenv").config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const errHandler = require("./middleware/errHandler.js")
const router = require("./router")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router)
app.use(errHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})