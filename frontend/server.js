/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (_, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'dist') })
})
app.listen(port, () => console.log(`App started ${port}!`))
