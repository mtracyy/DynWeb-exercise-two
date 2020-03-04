import React, {useEffect, useState} from 'react';
import axios from 'axios';

//API Key
const defaultKey = "98387b5ecfc7a23f50ccd2becb2faa10";
// const [currentTemperature, setCurrentTemperature] = useState('');

function Home() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(`Seoul`);
    const [currentTemperature, setCurrentTemperature] = useState('');
    const [currentTemperatureHigh, setCurrentTemperatureHigh] = useState('');
    const [currentTemperatureLow, setCurrentTemperatureLow] = useState('');
    const [currentHumidity, setCurrentHumidity] = useState('');
    const [currentWind, setCurrentWind] = useState('');

    useEffect(() => {
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${defaultKey}`)
          .then(function (response) {
            // handle success
            setWeatherData(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }, []); //brackets are parameters which anonymous useEffect function executes on

    console.log("weatherData", weatherData);

    useEffect(()=> {
       if (weatherData.main) {
           setCurrentTemperature(weatherData.main.temp);
           setCurrentTemperatureHigh(weatherData.main.temp_max);
           setCurrentTemperatureLow(weatherData.main.temp_min);
           setCurrentHumidity(weatherData.main.humidity);
           setCurrentWind(weatherData.wind.speed);
       }
    }, [weatherData]);

    return (
        <div className="Home">
            <h1>Weather in {city}</h1>
            <div className="WeatherInfo">
                <div className="WeatherInfo_Image">
                    <img src="" alt=""/>
                </div>

                <div className="WeatherInfo_Data">
                    <div className="CurrentTemperature">
                        <p className="CurrentTemperatureTemp">{currentTemperature}&#176;</p>
                        <p className="CurrentTemperatureLabel">Current Temperature</p>
                    </div>

                    <div className="OtherTemperatures">
                        <p>High Temp: <strong>{currentTemperatureHigh}&#176;</strong></p>
                        <p>Low Temp: <strong>{currentTemperatureLow}&#176;</strong></p>
                    </div>

                    <p>Humidity: {currentHumidity}%</p>
                    <p>Wind: {currentWind}mph</p>
                </div>
            </div>
        </div>
    );

}

export default Home