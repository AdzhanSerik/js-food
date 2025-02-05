const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./routes/auth')

app.use(express.json())
app.use(cors())
app.use('/api/auth', userRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})