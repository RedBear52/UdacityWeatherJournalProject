// const { response } = require("express");

/* Global Variables */
apiKey = '1f1c71436e0be4d6b4411cbe642694ba'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function getWeatherData() {
    console.log('clicking has occured!')
    const zipCode = document.getElementById('zip').value
    const userFeels = document.getElementById('feelings').value
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`
        fetch(baseURL)
            .then(res => res.json())
            .then(data => console.log(data))
            .then(console.log(userFeels, zipCode))
            .post('/')
}

const button = document.getElementById('generate')
button.addEventListener('click', getWeatherData)


// Async function using fetch() to get weather data from API
// async function getWeatherData() {


//     console.log(zipCode)



//     fetch(`${baseURL}`)
// }



// console.log(apiKey)

// const testEle = document.createElement('p')
// const testText = `${apiKey}`
// const postEle = document.body.appendChild(testEle)
// postEle.innerHTML += `${testText}`

