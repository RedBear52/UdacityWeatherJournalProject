// Setup empty JS object to act as endpoint for all routes
const projectData = {}
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
      res.send('Howdy Multiversians.  Prepare to be terminated...chu mp!' )
})
// Initialize all route with a callback function
const sendProjectData = (req, res) => {
    res.send(projectData)
}
// Callback function to complete GET '/all'

// Post Route
const userAddToProject = (req, res) => {
    const userInput = req.params.submit

    res.send(`POST received: ${userInput}`)
    console.log(req.body)
}

app.get('/add/:submit', userAddToProject)


const serverAddtoDatabase = (req, res) => {
    // const temp = params or some shit
}
app.post('/', serverAddtoDatabase) 
