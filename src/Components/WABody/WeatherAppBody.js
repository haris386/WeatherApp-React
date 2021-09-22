import React from 'react'
import "./weatherAppBody.css"

import axios from "axios";

import { useEffect, useState } from "react";

export default function WeatherAppBody() {
    const [userN, setuserN] = useState([])
    const [userData, setuserData] = useState([])

    const userEvent = (event) => {
        setuserN(event.target.value)
        console.log(userN)
    }

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + userN + "&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric").then((res) => {
            console.log(res.data);
            setuserData(res.data)
            console.log(userData)
        });
    }, [userN]);


    return (
        <>
            <h1 style = {{color: 'white',fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '25px'}}>React Weather App by Haris Ahmed</h1>
            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{userData.name}</h2><span className="date-day">22 Sep 2021</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{userData.sys.country}</span>
                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">{userData.main.temp}°</h1>
                        <h3 className="weather-desc">{userData.weather[0].description}</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"> <span className="title">FEELS LIKE</span><span className="value">{userData.main.feels_like}°</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{userData.main.humidity}%</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">WIND</span><span className="value">{userData.wind.speed}m/s</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">Min Temp</span><span className="day-temp">{userData.main.temp_min}°</span></li>
                            <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Max Temp</span><span className="day-temp">{userData.main.temp_max}°</span></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                    <div className="location-container"><button className="location-button"> <i data-feather="map-pin"></i><span style = {{outline: 'none'}}><input type="search" placeholder = 'Search Any City' onChange={userEvent} style={{
                        borderRadius: '100px', width: '100%',
                        /* height: 23px; */
                        border: 'none',
                        background: 'transparent',
                        color: 'black',
                        fontWeight: 'bold',
                        outline: 'none'
                    }} /></span></button></div>
                </div>
            </div>
        </>
    )
}
