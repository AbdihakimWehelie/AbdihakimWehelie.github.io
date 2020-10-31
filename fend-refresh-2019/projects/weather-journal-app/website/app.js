/* Global Variables */
const zip=document.getElementById('zip');
const city=document.getElementById('city');
const generatebtn= document.getElementById('generate');
const feels= document.getElementById('feelings');

// Create a new date instance dynamically with JS



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
	let newDate = (date.getMonth()+1)+'.'+ date.getDate()+'.'+ date.getFullYear();

	if(zipInput){
		
			getWeather(API_ROOT_ZIP,zipInput,API_KEY)
			
			
			    .then(function(data) {
          console.log(data);
          const temp = data.main.temp;
          console.log(temp);
          postData('http://localhost:8000/add', {date: newDate, temperature: temp, userResponse: feedback});
        })
      //chain UI update promise
      .then(function(){
          updateUI()
      });
			
		
			
	} 
		
		
		
		else if(cityInput) {
				getWeather(API_ROOT_CITY,cityInput,API_KEY)
			
			
			    .then(function(data) {
          console.log(data);
          const temp = data.main.temp;
          console.log(temp);
          postData('http://localhost:8000/add', {date: newDate, temperature: temp, userResponse: feedback});
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
    console.log(data);//checking what's in data
	console.log(url);// checking what link was carried
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
		console.log(allData);
		console.log(allData.date);
		console.log(allData.temperature);
        document.getElementById('date').innerHTML = 'Today is ' + allData.date;
        document.getElementById('temp').innerHTML = 'It is ' + allData.temperature + ' degrees outside.';
        document.getElementById('content').innerHTML = 'Your latest journal entry: ' + allData.userResponse;
    } catch (error) {
        console.log('Unable to update UI', error);
    }
};
	
	
