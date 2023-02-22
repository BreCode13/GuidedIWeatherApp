const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//Define paths for Express configur
const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates')
const partialsOath = path.join(__dirname, '../templates/partials')

//Setup hbs engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)





//Setup static directory to server
app.use(express.static(publicDirectoryPath))
//
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Breana Young'

    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Breana Young'
    })
})


app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})


//add