require("dotenv/config")
require("./src/router/prodRouter.js")
const cors = require("cors")
const express = require("express")
const router = require("./src/router/prodRouter.js")
const bodyParser = require("body-parser")
require("./src/config/db.js")

const PORT = process.env.PORT || 5001
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser())

app.use("/api/products", router)

app.listen(PORT, () => {
    console.log(`Connected ${PORT}`)
})
