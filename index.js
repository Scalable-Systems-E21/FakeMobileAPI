const express = require('express')
const app = express()
const http = require('http').Server(app)
const geoJson = require('./shapes.json')
const port = 8090; // default port to listen

app.get("/", (req, res) => { // Some types of controllers need this for heartbeats.
    res.sendStatus(200);
})

// define a route handler for the default home page
app.post( "/request", async (req, res) => {

    if (req.query.longtitude === undefined || req.query.lattitude === undefined) {
        res.status(400).send() // Bad request
    } 

    res.status(200).send(geoJson)
} );

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );