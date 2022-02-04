import React from 'react'
import "./weatherAppBody.css"

import axios from "axios";

import { useState } from "react";

export default function WeatherAppBody() {
    const [userN, setuserN] = useState([])
    let [userData, setuserData] = useState({
        "coord": {
            "lon": 67.0822,
            "lat": 24.9056
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 25.9,
            "feels_like": 26.03,
            "temp_min": 25.9,
            "temp_max": 25.9,
            "pressure": 1011,
            "humidity": 57
        },
        "visibility": 6000,
        "wind": {
            "speed": 6.17,
            "deg": 220
        },
        "clouds": {
            "all": 0
        },
        "dt": 1643787340,
        "sys": {
            "type": 1,
            "id": 7576,
            "country": "PK",
            "sunrise": 1643768030,
            "sunset": 1643807806
        },
        "timezone": 18000,
        "id": 1174872,
        "name": "Karachi",
        "cod": 200
    })

    if ('base' in userData) {
        console.log("Has Data")

        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + userN + "&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric").then((res) => {
            console.log(res.data);
            setuserData(res.data)
            console.log(userData)
        });


    } else {

        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + "karachi" + "&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric").then((res) => {
            console.log(res.data);
            setuserData(res.data)
            console.log(userData)
        });

    }


    const userEvent = (event) => {
        let userName = document.getElementById('user').value
        setuserN(userName)
        console.log(userN)
    }

    // const [userData, setuserData] = useState([])

    // const userEvent = (event) => {
    //     setuserN(event.target.value)
    //     console.log(userN)
    // }

    // useEffect(() => {
    //     axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + userN + "&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric").then((res) => {
    //         console.log(res.data);
    //         setuserData(res.data)
    //         console.log(userData)
    //     });
    // }, [userN]);


    return (
        <>
            <h1 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '25px' }}>React Weather App by Haris Ahmed</h1>
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
                            <div className="precipitation">
                                <span className="title">FEELS LIKE</span>
                                <span className="value">{userData.main.feels_like}°</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity">
                                <span className="title">HUMIDITY</span>
                                <span className="value">{userData.main.humidity}%</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind">
                                <span className="title">WIND</span>
                                <span className="value">{userData.wind.speed}m/s</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            <li className="active"><i className="day-icon" data-feather="sun"></i>
                                <span className="day-name">Min Temp</span>
                                <span className="day-temp">{userData.main.temp_min}°</span>
                            </li>
                            <li><i className="day-icon" data-feather="cloud"></i>
                                <span className="day-name">Max Temp</span>
                                <span className="day-temp">{userData.main.temp_max}°</span>
                            </li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                    <div className="location-container"><div className="location-button"> <i data-feather="map-pin"></i>
                        <div class="input-group mb-1" style={{
                            width: '100%', outline: 'none', position: 'relative', display: 'flex',
                            flexWrap: 'inherit',
                            alignItems: 'stretch'
                        }}>
                            <input type="text" name='' id='user' class="form-control" placeholder='Search City' style={{
                                borderRadius: '100px', width: '100%',
                                height: '35px',
                                border: 'solid',
                                background: 'transparent',
                                color: 'black',
                                fontWeight: 'bold',
                                outline: 'none'
                            }} />
                            <button style={{marginLeft: '5px', borderRadius: '15px', width: '125px'}} onClick={userEvent}>Get Data</button>
                    </div>
                    {/* <span style={{ outline: 'none' }}>
                            <input type="search" placeholder='Search Any City' onChange={userEvent} style={{
                                borderRadius: '100px', width: '100%',
                                height: '23px',
                                border: 'none',
                                background: 'transparent',
                                color: 'black',
                                fontWeight: 'bold',
                                outline: 'none'
                            }} />
                        </span> */}
                </div></div>
        </div>
            </div >
        </>
    )
}
