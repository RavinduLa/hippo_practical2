//index.js//Import Express
let express = require('express')//Start App
let app = express();//Assign port
var port = process.env.PORT || 8080;


//Welcome Message
app.get('/', (req, res) => res.send('Welcome There'));

// Launch app to the specified port
app.listen(port, function() {
    console.log("Running on Port "+ port);
})


//Import routes
let apiRoutes = require("./routes")

//Use API routes in the App
app.use('/api', apiRoutes)

//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');

//configure bodyparser to handle the post requests
app.use(express.urlencoded({
    extended: true
}));

//app.use(bodyParser.json());
app.use(express.json);


//connect to mongoose
const dbPath = 'mongodb://localhost:27017/hippo_prac_db';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})


