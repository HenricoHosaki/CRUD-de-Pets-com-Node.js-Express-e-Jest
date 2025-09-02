const express = require('express');
const database = require ('./src/repository/database')
const app = express();
const port = 1000
const router = require('./src/routes/routesPet');

app.use(express.json());
app.use(router);

app.use((req, res) => {
    res.status(404).json({error: "Route not found"});
});

database.db
    .sync({ force: false }) //force:true just in the first use due to reset of the data
    .then((_) => {
            app.listen(port, () =>{
                console.log('Server running in ' + port);
            })
        })
    .catch((e) => {
        console.error(`Não foi possível conectar com o banco: ${e}`)
        })