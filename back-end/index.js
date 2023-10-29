var http = require('http')
var fs = require('fs')

const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

const PORT = 8080;

const app = express()
app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>")
})

app.get("/two", (req, res) => {
    res.send("<h5>Man Reference</h5>")
})

app.get("/three", (req, res) => {
    var fruits = new Map();
    fruits.set("applies", 10);
    fruits.set("bananas", 20);
    fruits.set("oranges", 30);
    res.send(Object.fromEntries(fruits));
})

app.get("/four", (req, res) => {
    res.send("<h2>Page 4</h2>")
})

app.get("/five", (req, res) => {
    res.send("<h2>Page 5</h2>")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});