const express = require('express')
const app = express()
const cors  = require('cors')
app.use(cors())

const todo = require('./routes')

const port = process.env.port || 8000

app.use(todo)


app.listen(port, () => console.log(`server running on port http://localhost:${port}`))