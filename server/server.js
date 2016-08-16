//Main starting point
const  express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config');

//DB Setup
mongoose.connect('mongodb://' + config.host + '/' + config.database);

//App Setup
app.use(bodyParser.json({type: '*/*'}));
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);