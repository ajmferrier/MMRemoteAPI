var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Module = require('./api/models/mmremoteModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Moduledb', {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./api/routes/mmremoteRoutes'); // importing route
routes(app); // register the route

app.listen(port);

console.log('MM Remote RESTful API server started on: ' + port);