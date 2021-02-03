const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const { v4: uuidv4 } = require('uuid');


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
    newNote.id = uuidv4();

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const updateData = JSON.parse(data).concat(newNote)

        fs.writeFile('./db/db.json', JSON.stringify(updateData), (err, data) => {
            res.json({ "name": "true" })
        })
    })
})




app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})