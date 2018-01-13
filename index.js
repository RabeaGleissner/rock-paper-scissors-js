#!usr/bin/env node

const {Console} = require('console')
const App = require('./src/app')

const app = new App(new Console(process.stdout))

app.run()
