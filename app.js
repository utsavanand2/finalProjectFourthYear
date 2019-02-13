const express = require('express')
const app = express()
const path = require('path')

app.get('/:file', (req, res) => {
    res.sendFile(path.join(__dirname + `/html/${req.params.file}`))
})

const port = process.env.PORT || 80

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})