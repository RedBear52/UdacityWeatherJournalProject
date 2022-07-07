// const { response } = require("express");

/* Global Variables */
apiKey = '1f1c71436e0be4d6b4411cbe642694ba'



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Async function using fetch() to get weather data from app endpoint
const postToDataBase = async (dataObj) => {
   const { main } = dataObj
   const temp = parseInt(main.temp)

   console.log(temp)
}

// const renderToDOM = async (path, dataObj) => {
//     console.log(dataObj)
// }

const getForecast = async () => {
    const zipCode = document.getElementById('zip').value
    const userFeels = document.getElementById('feelings').value
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`
        await fetch(baseURL)
            .then(res => res.json())
            .then(data => postToDataBase(data))
}

const button = document.getElementById('generate')
button.addEventListener('click', getForecast)