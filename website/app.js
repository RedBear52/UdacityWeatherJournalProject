/* Global Variables */
const apiKey = '1f1c71436e0be4d6b4411cbe642694ba'

// Create a new date instance dynamically with JS
let d = new Date()
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear()

//Async Function to fetch Data from the App's endpoint then  Render weather data + user data to UI
const showUser = async () => {
    const request = await fetch('/projectData')
    try {
    // JSONify data
    const processedData = await request.json()
    // render updated data to the DOM
    document.getElementById('temp').innerHTML = `<h3>TEMPERATURE:</h3>   ${processedData.temperature} °`
    document.getElementById('content').innerHTML = `<h3>FEELINGS:</h3>   ${processedData.userResponse}`
    document.getElementById('date').innerHTML = `<h3>DATE:</h3>   ${processedData.date}`
    } catch(err) {
      console.log('err: ', err)
    }
}

// Send POST request to the server
const postToDataBase = async ( url = '', data = {} ) => {
    // Implementing boilerplate code for this step
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            // Important step here: declaring content type as json
            'Content-Type': 'application/json'
        },
        // converting response body into string
        body: JSON.stringify(data)
    })
    try {
        const newData = await response.json()
        return newData
    } catch(err) {
        console.log('error: ', err)
    }
}

// Async function using fetch() to get weather data from OpenWeather.org
const getForecast = async () => {
    const zipCode = document.getElementById('zip').value
    const userFeels = document.getElementById('feelings').value
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`
        await fetch(baseURL)
            .then(res => res.json())
            .then(data => postToDataBase('/add', { 
                temperature: parseInt(data.main.temp), 
                date: newDate, 
                userResponse: userFeels 
            }))
            .then(() => showUser())
}

const button = document.getElementById('generate')
button.addEventListener('click', getForecast)