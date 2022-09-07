const express= require('express')
const mongoose = require("mongoose")

const PORT = process.env.PORT || 8080

const app = express();

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URL || "mongodb://localhost/gooblebooksdb"
)

app.listen(PORT, ( ) => {console.log(`server is running at ${PORT}`)
})