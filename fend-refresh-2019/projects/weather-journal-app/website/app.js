/* Global Variables */
const zip=document.getElementById('zip');
const city=document.getElementById('city');
const generatebtn= document.getElementById('generate');
const feels= document.getElementById('feelings');

// Create a new date instance dynamically with JS

const apiURL='https://api.openweathermap.org/data/2.5/weather?';

// The URL root if user searches by zip code
const API_ROOT_ZIP = 'https://api.openweathermap.org/data/2.5/weather?units=metric&zip=';

// The URL root if user searches by city
const API_ROOT_CITY = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

//figure out how to hide it
//const apiKey= `&appid=${config.API_KEY}`;
const API_KEY='88bcfe9b8586144cdab20a4845e59c40';


let date = new Date();
let newDate = date.getMonth()+'.'+ date.getDate()+'.'+ date.getFullYear();




// event occurs when generate button is hit
generatebtn.addEventListener("click" , response);

function response(){
	
	if(zip){
		
			let url= API_ROOT_ZIP + zip + API_KEY;
			
			findWeather(url)
			
			.then(function (weatherData) {
            const errorMessage = document.getElementById('error');
              if (weatherData.cod == "200") {
                errorMessage.classList.add('hide');
                const icon = weatherData.weather[0].icon;
                //const date = dateTime();
                const temperature = weatherData.main.temp.toFixed(0);
                const feelings = feelingsInput.value;
                postJournal('/add', { icon, newdate, temperature, feelings });

                // Calls to update the site with latest entry
                updateUI(degreeSystem);

				} else {
                console.log('Bad data entered');
                errorMessage.classList.remove('hide');
                return;
				}
			})
			
		} 
		
		
		
		
		
		
		else if (city) {
			let url= API_ROOT_CITY + city + API_KEY;
			
			findWeather(url)
			
			.then(function (weatherData) {
            const errorMessage = document.getElementById('error');
              if (weatherData.cod == "200") {
                errorMessage.classList.add('hide');
                const icon = weatherData.weather[0].icon;
                //const date = dateTime();
                const temperature = weatherData.main.temp.toFixed(0);
                const feelings = feelingsInput.value;
                postJournal('/add', { icon, newdate, temperature, feelings });

                // Calls to update the site with latest entry
                updateUI(degreeSystem);

				} else {
                console.log('Bad data entered');
                errorMessage.classList.remove('hide');
                return;
				}
			})
		}
        
		
		else
	{
		console.log("Bad data entered");
	}
		
		
		
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
	
	
//add the code to update the UI
async function updateUI(data) {
     const response = await fetch('/retrieve');
    const latestEntry = await response.json();
    document.getElementById('icon').innerHTML = `<img class="icon" src="http://openweathermap.org/img/wn/${latestEntry.icon}@2x.png" alt="Weather icon">`
    document.getElementById('date').innerHTML = `Date: ${latestEntry.date}`;
    document.getElementById('temp').innerHTML = `Temperature: ${latestEntry.temperature}\xB0${degreeSystem}`;
    document.getElementById('content').innerHTML = `Feelings: ${latestEntry.feelings}`;
    document.getElementById('journal').classList.remove('hide');
}

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



*/

