var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(express.static('files'))
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/MoneytrackerDatabase')
var db = mongoose.connection
db.on('error', () => console.log("Error in Connecting the Database"))
db.once('open', () => console.log("Connection to Database Successful"))


app.post("/add", (req,res) => {
    var category = req.body.category
    var amount = req.body.amount
    var info = req.body.info
    var date = req.body.date

    var data = {
        "category" : category,
        "amount" : amount,
        "info" : info,
        "date": date
    }
    db.collection('Users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully")
    })
})

app.get("/",(req,res) => {
    res.set({
        "Allow-access-Allow-Origin" : '*'
    })
    return res.redirect('index.html')
}).listen(5000)

console.log('Listening on Port 5000')