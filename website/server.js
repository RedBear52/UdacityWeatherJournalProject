// Setup empty JS object to act as endpoint for all routes
let projectData = { temp: '95'}
// Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express();
/* Dependencies */
require('dotenv').config()
console.log(process.env)
const apiKey = process.env.API_KEY


const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Cors for cross origin allowance
const cors = require('cors')
// Initialize the main project folder
app.use(express.static('website'))
// Spin up the server
const port = 3000
const server = app.listen(port, () => {
    console.log("Server is listening on:")
    console.log(`Port: ${port}`)
})

// Callback to debug
app.get('/', (req, res) => {
      res.send('Howdy Multiversians.  Prepare to be terminated...chump!' )
})

// ----ROUTES---- //
// Initialize all route with a callback function
app.get('/all', returnProjectData)

// Callback function to complete GET '/all'
function returnProjectData(req, res) {
    res.send(projectData)
}

// Establish POST Route with a callback function
app.post('/add', getUserInput)
function getUserInput(req, res) {
    projectData['date'] = req.body.date
    projectData['temperature'] = req.body.temperature
    projectData['userResponse'] = req.body.userResponse
    res.send(projectData)
}