
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const validateBearerToken = require('./validate-bearer-token')
const errorHandler = require('./error-handler')
const bookmarksRouter = require('./bookmarks/bookmarks-router')

const app = express()

// 'production' and 'test' env settings
app.use(morgan((NODE_ENV === 'production')
    ? 'tiny'
    : 'common', {
        skip: () => NODE_ENV === 'test'
}))
app.use(cors())
app.use(helmet())
app.use(validateBearerToken)

app.use(bookmarksRouter)

// GET / endpoints
app.get('/', (req, res) => {
    res.send('Hello, world!')
});
 
app.use(errorHandler) 

module.exports = app