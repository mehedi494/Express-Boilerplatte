const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const dbConnect = require("./utils/dbConnect")
const toolsRouter = require("./Routes/v1/tools.routes")


app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;



const { ViewCount } = require('./Middleware/ViewCount');

// app.use(ViewCount)
dbConnect()

app.use("/api/v1/tools", toolsRouter)


app.get("/test", (req, res) => {
    res.send({ Message: 'HELLO WORLD' })
});

app.all("*", (req, res) => {
    res.send("NO ROUTE FOUND")
})
app.listen(port, () => {
    console.log("listen at", port);
})