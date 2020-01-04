const express = require('express')
const app = express()
app.use(express.static('./build'))
app.listen(process.env.port || 3001, () => {
  console.log('Server is running!')
})