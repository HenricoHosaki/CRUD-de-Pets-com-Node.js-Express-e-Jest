const express = require('express');
const app = express();
const port = 1000
const router = require('./src/routes/pet')
app.use(express.json());

app.use(router);

app.use((req, res) => {
    res.status(404).json({error: "Route not found"});
});

app.listen(port, ()=>{
    console.log("listening port: " + port)
})