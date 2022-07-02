// Setup empty JS object to act as endpoint for all routes
let projectData = {}
// Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express();
/* Dependencies */
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
const userInputtedData = []
function addIncomingData(req, res) {
    console.log(req.body)
    let temp = req.body.temperature
    let date = req.body.date
    let userResponse = request.body.userResponse
    userInputtedData.push(
        {
        'temperature': temp,
        'date': date,
        'userResponse': userResponse
        }
    )
}

app.post('/', addIncomingData)



