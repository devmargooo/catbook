const express = require('express')
const app = express()
const list = require('./data/list.json')
const don_kihot = require('./data/don_kihot.json')

app.get('/api', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(list)
})
app.get('/api/don_kihot', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(don_kihot)
})

app.listen(8081, () => console.log('Listening on port 8081!'))

app.use(express.static('public'))