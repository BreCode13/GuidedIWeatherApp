const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error,{latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
}








//Having problems with the length.  TypeError: Cannot read properties of undefined (reading 'length')





// geocode('Boston', (error, data) => {
// console.log('Error', error)
// console.log('Data', data)
// })


// forecast(-118.521447,33.899991, (error, data)=> {
//   console.log('Error', error)
//   console.log('Data', data)
// })










//console.log('Starting')
//setTimeout(()=> {
  //  console.log('2 Second Timer')
//}, 2000)
//run for two seconds 
//setTimeout(()=> {
  //  console.log('0 Second Timer')
//}, 0)
//console.log('Stopping')

//in asycnchronous one happens after the other
// in a non blocking model, mutiple lines of code are ran 






// //shows the weather data in the terminal 
// //units=f changes it to F
// const url = new URL('http://api.weatherstack.com/current?access_key=de88a559d98a474901d6fd6e7aec6c1a&query=37.8267,-122.4233&units=f')

// request({url: url, json: true},(error, response) => {
// if (error) {
//     console.log('unable to connect to weather service!')

//     //small forecast to user
// } else {console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + '% chance of rain.' )

// }

// //console.log(response.body.current)

// //const data = JSON.parse(response.body)
// //console.log(data.current)
// })






//Geocoding
//Address -> Lat/Long -> Weather 
//  const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnJlY29kZTEzIiwiYSI6ImNsZTByeHdheTFkeGkzcXIzYWNmcm9saXkifQ.BujsA28Ae3tLygAZlTs9cQ&=1'

// request({url: geocodeURL, json: true}, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location services') 
//    } else { //print coordinates
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0] 
//     console.log(latitude, longitude)
  
//   }
//  })
