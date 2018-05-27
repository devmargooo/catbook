const express = require('express')
const app = express()
const list = require('./data/list.json')
const don_kihot = require('./data/don_kihot.json')
const charlotte = require('./data/charlotte.json')
const ted = require('./data/ted.json')
const lizzy = require('./data/lizzy.json')
const angelika = require('./data/angelika.json')
const jonathan = require('./data/jonathan.json')

const don_kihot_comments = require('./comments/don_kihot.json')
const charlotte_comments = require('./comments/charlotte.json')
const ted_comments = require('./comments/ted.json')
const lizzy_comments = require('./comments/lizzy.json')
const angelika_comments = require('./comments/angelika.json')
const jonathan_comments = require('./comments/jonathan.json')

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
app.get('/api/charlotte', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(charlotte)
})
app.get('/api/ted', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(ted)
})
app.get('/api/lizzy', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(lizzy)
})
app.get('/api/angelika', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(angelika)
})
app.get('/api/jonathan', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(jonathan)
})


app.get('/api/comments/don_kihot', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(don_kihot_comments)
})
app.get('/api/comments/charlotte', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(charlotte_comments)
})
app.get('/api/comments/ted', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(ted_comments)
})
app.get('/api/comments/lizzy', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(lizzy_comments)
})
app.get('/api/comments/angelika', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(angelika_comments)
})
app.get('/api/comments/jonathan', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.send(jonathan_comments)
})

app.listen(8081, () => console.log('Listening on port 8081!'))

app.use(express.static('public'))