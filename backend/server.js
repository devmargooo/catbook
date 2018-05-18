const express = require('express')
const app = express()
const list = require('./data/list.json')
const don_kihot = require('./data/don_kihot.json')

const don_kihot_comments_5 = require('./comments/don_kihot/5.json')

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
app.get('/api/don_kihot/comments/5', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(don_kihot_comments_5)
})

app.listen(8081, () => console.log('Listening on port 8081!'))

app.use(express.static('public'))