const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./routes/auth')
const productsRouter = require('./routes/products')

app.use(express.json())
app.use(cors())
app.use('/api/auth', userRouter)
app.use('/api/products', productsRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})