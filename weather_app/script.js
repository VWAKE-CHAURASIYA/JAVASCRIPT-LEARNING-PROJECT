// we take data by call b referecne , so that we can change the data 

const cityName= document.querySelector(".city");
// cityname.innerHTML = "Varanasi,India"    //here we have hardcoded , but we need it form API

let date=document.querySelector(".date");
date.innerHTML = new Date();

let degree = document.querySelector(".forecast");
// degree.innerHTML= "22 &#176"; 

let icon= document.querySelector(".icon");

let weatherdata = document.querySelector(".weatherdata");
weatherdata.innerHTML = "Rainy";

let weathermin = document.getElementById("min");

let weathermax = document.getElementById("max");


// cards: 

const weather = document.querySelector(".weatherinfo");
let humidity =document.getElementById("humidityinfo");
let wind= document.getElementById("windinfo");
let pressure = document.getElementById("pressureinfo");



// step2: to FTECH THE DATA BY API 
// we know that to save from callback hell --->promises--->async await 
// for fetching the weather api :::  visit openweathermap.com 



// to get the country name 
const getcountryname = (code)=>
{
    return  new Intl.DisplayNames([code], { type: 'region' }).of(code);
};


const getdata = async()=>
{
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=Pune&APPID=a0b06669a793506ae54060f7df8a5fb6`;
    // const apiurl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/varanasi,india/?key=YOUR_API_KEY `
    try
    {
        const getapi =await fetch(apiurl);
        const res = await getapi.json();              //json converts string to an object, so thant we can easily able oto access the object.
        console.log(res);


        // now we need to destructure the data that we want  (ES2015)

        const {main, name, weather, wind,  sys, dt } = res;     //taking the value which requied into response using destructoring
        
        // step 4: now we need ot display the city name along with the county name: (for gettin county name refer: internationalizatiion api in js)
     
        cityName.textContent= `${name}, ${getcountryname(sys.country)}`;

        // step 5: now we need ot foramt date and time: 
        //  date.textContent= dt;                          //it gives the time into seconds, i have to convert it into prper time and date for taht referto internationalizaiton api in js


        // step 6: to set temp 
        degree.innerHTML =`${main.temp} &deg;`;

        // step7: to get weather data 
        weatherdata.textContent= `${weather.main}`;


        // step 8: to get teh data of min max : 

        weathermin.textContent= `Min temp: ${main.temp_min.tofixed()}`
        weathermax.textContent= `Max temp: ${main.temp_max.tofixed( )}`      //after isomg tofixed value will be accurate

        // step 9: final to get the cards info:
        
        // weatherinfo.textContentL= `${main.feels_like} &deg;`;
        humidity.innerHTML = ` ${main.humidity}%`;
        wind.innerHTML = `${wind.speed} m/s`;
        pressure.innerHTML= `${main.pressure} hpa`

        //adding icon: 
        // weatherdata.innerHTML= `${weather[0].main}`;
        icon.innerHTML= `${weather[0].icon}`;



        // step: 10: we need to provide power to serch button so that we can access any city any time . 

        const clicking = document.getElementById("mag");
        clicking.addEventListener("click", getdata());
        



    }
    catch(error)
    {
        console.log(error);
    }

};

document.body.addEventListener("load", getdata() );         //bydefault function load - IFFIE
