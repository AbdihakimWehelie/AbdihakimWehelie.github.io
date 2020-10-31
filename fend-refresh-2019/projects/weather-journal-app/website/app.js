/* Global Variables */
const zip=document.getElementById('zip');
const city=document.getElementById('city');
const generatebtn= document.getElementById('generate');
const feels= document.getElementById('feelings');

// Create a new date instance dynamically with JS

const apiURL='https://api.openweathermap.org/data/2.5/weather?';

// The URL root if user searches by zip code
const API_ROOT_ZIP ='https://api.openweathermap.org/data/2.5/weather?units=metric&zip=';

// The URL root if user searches by city
const API_ROOT_CITY ='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

//figure out how to hide it
//const apiKey= `&appid=${config.API_KEY}`;
const API_KEY='&appid=88bcfe9b8586144cdab20a4845e59c40';






const getWeather = async (baseURL,zip,cred) => {
    const Url=baseURL+zip+cred;
	const request = await fetch(Url);
    try {
        // Transform into JSON
        const data = await request.json();
        //console.log(data);
        return data;
    }
    // appropriately handle the error
    catch (error) {
        console.log('data can not be fetched', error);
    }
};





// event occurs when generate button is hit
generatebtn.addEventListener("click" , response);

function response(e){
	
	const zipInput= zip.value;
	const cityInput= city.value;
	const feedback= feels.value;
	let date = new Date();
	let newDate = date.getMonth()+'.'+ date.getDate()+'.'+ date.getFullYear();

	if(zipInput){
		
			getWeather(API_ROOT_ZIP,zipInput,API_KEY)
			
			
			    .then(function(data) {
          //console.log(data);
          //let temp = data.main.temp;
          //console.log(temp);
          postData('http://localhost:8000/add', {temperature: data.main.temp, date: newDate, userResponse: feedback});
        })
      //chain UI update promise
      .then(function(){
          updateUI('http://localhost:8000/add')
      });
			
		
			
	} 
		
		
		
		else if(cityInput) {
				getWeather(API_ROOT_CITY,cityInput,API_KEY)
			
			
			    .then(function(data) {
          //console.log(data);
          //let temp = data.main.temp;
          //console.log(temp);
          postData('http://localhost:8000/add', {temperature: data.main.temp, date: newDate, userResponse: feedback});
        })
		
		//chain UI update promise
		.then(function(){
          updateUI()
		});
			
	}
        
	
		else
	{
		console.log("Bad data entered");
	}
	
		
}




	





//POST funtcion
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    console.log(response);
    try {
        const newData = await response.json();
        console.log(newData);
        // appropriately handle the error
    } catch (error) {
        console.log('Unable to POST data', error);
    }
};






//Update UI
const updateUI = async () => {
    try {
        const request = await fetch('http://localhost:8000/all');
        console.log(request);
        const allData = await request.json();
		//let allData = data[data.length - 1];
        document.getElementById('date').innerHTML = 'Today is ' + allData.date;
        document.getElementById('temp').innerHTML = 'It is ' +allData.temperature + ' degrees outside.';
        document.getElementById('content').innerHTML = 'Your latest journal entry: ' +allData.userResponse;
    } catch (error) {
        console.log('Unable to update UI', error);
    }
};
	
	
//Old code

/*
// Grabs the user's input, then forms URL, calls API, POSTS and updates UI
function clickRespond() {

    // Grab user's input
    const zipInput = document.getElementById('zip');
    const cityInput = document.getElementById('city');
    const unitsInput = document.querySelector('input[name="units"]:checked')
    const feelingsInput = document.getElementById('feelings');
    let units;
    let degreeSystem;
    if (unitsInput) {
        units = unitsInput.value;
    } else {
        units = "metric";
    }
    if (units == "metric") {
        degreeSystem = "C";
    } else {
        degreeSystem = "F";
    }

    // Read values of zip and city
    const zip = zipInput.value;
    const city = cityInput.value;

    // Form URL based on zip or city search
    // (zip takes precendence if both were entered)
    let url;
    if (zip) {
        url = API_ROOT_ZIP + zip + API_UNITS + units + API_KEY;
    } else if (city) {
        url = API_ROOT_CITY + city + API_UNITS + units + API_KEY;
    }

    // Call the API
    getWeather(url)

        // Prepares data for POST, calls the POST
        .then(function (weatherData) {
            const errorMessage = document.getElementById('error');
            if (weatherData.cod == "200") {
                errorMessage.classList.add('hide');
                const icon = weatherData.weather[0].icon;
                const date = dateTime();
                const temperature = weatherData.main.temp.toFixed(0);
                const feelings = feelingsInput.value;
                postJournal('/add', { icon, date, temperature, feelings });

                // Calls to update the site with latest entry
                updateUI(degreeSystem);

            } else {
                console.log('Bad data entered');
                errorMessage.classList.remove('hide');
                return;
            }
        })
}

// Calls the API, converts response to JSON
// returns weatherData JSON object
async function getWeather(url) {
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
}



if(zipInput){
		
			let url= API_ROOT_ZIP + zipInput + API_KEY;
			
			findWeather(url)
			
			.then(function (weatherData) {
            const errorMessage = document.getElementById('error');
              if (weatherData) {
                errorMessage.classList.add('hide');
                const icon = weatherData.weather[0].icon;
                //const date = dateTime();
                const temperature = weatherData.main.temp.toFixed(0);
                
                postWeather('/add', { icon, newdate, temperature, feels });

                // Calls to update the site with latest entry
                updateUI();

				} else {
                console.log('Bad data entered');
                //errorMessage.classList.remove('hide');
                return;
				}
			})
			
		} 
		
		
		
		
		
		
		else if (cityInput) {
			let url= API_ROOT_CITY + cityInput + API_KEY;
			
			findWeather(url)
			
			.then(function (weatherData) {
            const errorMessage = document.getElementById('error');
              if (weatherData) {
                errorMessage.classList.add('hide');
                const icon = weatherData.weather[0].icon;
                //const date = dateTime();
                const temperature = weatherData.main.temp.toFixed(0);
                
                postWeather('/add', { icon, newdate, temperature, feelings });

                // Calls to update the site with latest entry
                updateUI({ icon, newdate, temperature, feelings });

				} else {
                console.log('Bad data entered');
               // errorMessage.classList.remove('hide');
                return;
				}
			})
		}
        
		
		else
	{
		console.log("Bad data entered");
	}


async function findWeather(url){
	const response= await fetch(url);
	
	try{
		const weatherData= await response.json();
		return weatherData;
	}
	
	
	catch(e){
		console.log("Error",e);
	}
	
	
}


async function postWeather(url, data){
	
	await fetch(url, {
		method:'POST',
		credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data)
    });
}




*/

