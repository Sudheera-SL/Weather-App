import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

export const WeatherApp = () => {

    let api_key ="59f04fba4de93a8b31b12299f4363cfa"; 
    
    const [wicon,setWicon] = useState(clear_icon);
    
    const Search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return onabort;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}` ; 

        

        let responce = await fetch(url);
        let data = await responce.json();

        const humi = document.getElementsByClassName("humi-pre");
        const wind = document.getElementsByClassName("wind-rate");
        const temp = document.getElementsByClassName("temp-class");
        const loca = document.getElementsByClassName("location"); 

        humi[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML =data.wind.speed+"km/h";
        temp[0].innerHTML =data.main.temp +"C";
        loca[0].innerHTML =data.name; 

        if(data.weather[0].icon ==="01d" ||data.weather[0].icon ==="01n")
        {
            setWicon(clear_icon); 

        }else if (data.weather[0].icon ==="02d" ||data.weather[0].icon ==="02n")
        {
            setWicon(cloud_icon);

        }else if (data.weather[0].icon ==="03d" ||data.weather[0].icon ==="03n")
        {
            setWicon(drizzle_icon);
        }else if (data.weather[0].icon ==="04d" ||data.weather[0].icon ==="04n")
        {
            setWicon(rain_icon);
        }else if (data.weather[0].icon ==="13d" ||data.weather[0].icon ==="13n")
        {
            setWicon(snow_icon);
        }else if (data.weather[0].icon ==="10d" ||data.weather[0].icon ==="10n")
        {
            setWicon(rain_icon);
        }else 
        {
            setWicon(clear_icon);
        }
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='search'/>
            <div className='search-icon' onClick={()=>{Search()}}>
                <img src={search_icon} alt=""/>
            </div>
        </div>

        <div className='weather-image'>
            <img src={clear_icon} alt=''/>
        </div>

        <div className='temp-class'>24 c</div>
        <div className='location'>London </div>

        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} alt='' className='icon' />
                <div className='data'>
                    <div className='humi-pre'>64%</div>
                    <div className='text'>Humidity</div>
                </div>
            </div> 
            <div className='element'>
                <img src={wind_icon} alt='' className='icon' />
                <div className='data'>
                    <div className='wind-rate'>18 km/h</div>
                    <div className='text'>Wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
