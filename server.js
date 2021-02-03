const path = require('path')
const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// HTML ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'))
})

// API ROUTES
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname + './db/db.json'))
})

app.post('/api/notes', (req, res) => {
    const newNote = req.body
    console.log(newNote)
    notes.push(newNote)
    res.json(newNote)
})




app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})