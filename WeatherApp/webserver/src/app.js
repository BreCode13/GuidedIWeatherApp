const path = require('path')
const express = require('express')

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Breana young'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Breana Young'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.'
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











// const path = require('path')
// const express = require('express')
// //const hbs = require('hbs')

// const app = express()


// //Define paths for Express configur
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates')

// //const partialsPath = path.join(__dirname, '../templates/partials')

// //Setup hbs engine and view location
// app.set('view engine', 'hbs')
// app.set('views', viewsPath)
// //hbs.registerPartials(partialsPath)





// //Setup static directory to server
// app.use(express.static(publicDirectoryPath))
// //
// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather App',
//         name: 'Breana Young'

//     })
// })
// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Breana Young'
//     })
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         helpText: 'Helpful Text!',
//     })
// })




// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(4000, () => {
//     console.log('Server is up on port 4000.')
// })


// //add