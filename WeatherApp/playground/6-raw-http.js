const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=de88a559d98a474901d6fd6e7aec6c1a&query=37.8267,-122.4233&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()