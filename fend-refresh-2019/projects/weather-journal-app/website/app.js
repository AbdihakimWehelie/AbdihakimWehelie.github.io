/* Global Variables */
const zip=document.getElementById('zip');
const city=document.getElementById('city');
const generatebtn= document.getElementById('generate');
const feels= document.getElementById('feelings');

// Create a new date instance dynamically with JS

const apiURL='http://api.openweathermap.org/data/2.5/weather?';

// The URL root if user searches by zip code
const API_ROOT_ZIP = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip=';

// The URL root if user searches by city
const API_ROOT_CITY = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';

//figure out how to hide it
//const apiKey= `&appid=${config.API_KEY}`;
const apiKey='88bcfe9b8586144cdab20a4845e59c40';


let date = new Date();
let newDate = date.getMonth()+'.'+ date.getDate()+'.'+ date.getFullYear();




// event occurs when generate button is hit
generatebtn.addEventListener("click" , response);

function response(){
	
	if(zip){
        findWeather(zip)
        .then(data => {
            postWeather("/weather", {
                place: data.name,
                country: data.sys.country,
                img: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                windspeed: `${data.wind.speed} mi/h`, 
                maxTemp: `${Math.round(data.main.temp_max)} °F`,
                minTemp: `${Math.round(data.main.temp_min)} °F`,
                humidity: `${Math.round(data.main.humidity)} %`,
                temp: `${Math.round(data.main.temp)} °F`,
                cloudPer: `${data.clouds.all} %`,
                cloudiness: data.weather[0].description,
                sunrise: formatUnixTime(data.sys.sunrise),
                sunset: formatUnixTime(data.sys.sunset),
                date: today,
                userResponse: feels ? feels : ""
            })
        })
        .then(data => {
            getProjectData ("/all");
        })
    }


	else if(city){
        findWeather(city)
        .then(data => {
            postWeather("/weather", {
                place: data.name,
                country: data.sys.country,
                img: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                windspeed: `${data.wind.speed} mi/h`, 
                maxTemp: `${Math.round(data.main.temp_max)} °F`,
                minTemp: `${Math.round(data.main.temp_min)} °F`,
                humidity: `${Math.round(data.main.humidity)} %`,
                temp: `${Math.round(data.main.temp)} °F`,
                cloudPer: `${data.clouds.all} %`,
                cloudiness: data.weather[0].description,
                sunrise: formatUnixTime(data.sys.sunrise),
                sunset: formatUnixTime(data.sys.sunset),
                date: today,
                userResponse: feels ? feels : ""
            })
        })
        .then(data => {
            getProjectData ("/all");
        })
    }
	
	else
	{
		console.log("Bad data entered");
	}
	
}


async function findWeather(place){
	
	const response= await fetch(fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${place}&units=metric&appid=${apiKey}`));
	
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
const updateUI = (data) => {
    document.querySelector(".js-place").innerHTML = data.place;
    document.querySelector(".js-country").innerHTML = data.country;
    document.querySelector(".js-date").innerHTML = data.date;
    document.querySelector(".js-img").setAttribute("src", data.img );
    document.querySelector(".js-temp").innerHTML = data.temperature;
    document.querySelector(".js-humidity").innerHTML = data.humidity;
    document.querySelector(".js-cloudiness").innerHTML = data.cloudiness;
    document.querySelector(".js-sunrise").innerHTML = data.sunrise;
    document.querySelector(".js-sunset").innerHTML = data.sunset;
    document.querySelector(".js-windspeed").innerHTML = data.windspeed;
    document.querySelector(".js-content").innerHTML = data.userResponse;
}







