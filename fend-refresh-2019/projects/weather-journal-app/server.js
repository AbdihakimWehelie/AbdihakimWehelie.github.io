// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server




/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')



const cors = require('cors');
app.use(cors());

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
  console.log('Response sent');
};

// POST route
app.post('/add', callBack);

function callBack(req,res){
      projectData['date'] = request.body.date;
    projectData['temp'] = request.body.temp;
    projectData['feel'] = request.body.feel;
    response.send(projectData);
  //res.send('POST received');
  console.log('POST received');
};

