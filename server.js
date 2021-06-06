const express = require('express')
const routes = require('./controllers')
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers')
const exphbs = require('express-handlebars')
const path = require('path')
const session = require('express-session')
require('dotenv').config()

// const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Sessions
const sess = {
    secret: 'Very secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}
app.use(session(sess))

// Routing
app.use(routes)

// handlebars engine
const hbs = exphbs.create({defaultLayout: 'main', helpers})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')




// Change false to true
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
})