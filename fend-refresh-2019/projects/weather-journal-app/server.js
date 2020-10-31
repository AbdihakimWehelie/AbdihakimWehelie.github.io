// Setup empty JS object to act as endpoint for all routes
projectData = {};



/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

app.use(express.static('website'));
/* Dependencies */

const cors = require('cors');
app.use(cors());

/* Middleware*/

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/* Initialize the main project folder*/
app.use(express.static('website'));




// Setup Server
const port = 8000;


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
    projectData["date"] = req.body.date;
    projectData["temperature"] = req.body.temperature;
    projectData["userResponse"] = req.body.userResponse;
    res.send(projectData);
  //res.send('POST received');
  console.log('POST received');
  console.log(req.body.temperature);
};

