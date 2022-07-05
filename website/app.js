// const { response } = require("express");

/* Global Variables */
const apiKey = '4c1981daf5f3a08d2e1183a27d127a40'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function getWeatherData() {
    console.log('clicking has occured!')
    const zipCode = document.getElementById('zip').value
    const userFeels = document.getElementById('feelings').value
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`
    console.log(baseURL)
        fetch(baseURL)
            .then(res => res.json())
            .then(data => console.log(data))
            .then(console.log(userFeels, zipCode))
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

