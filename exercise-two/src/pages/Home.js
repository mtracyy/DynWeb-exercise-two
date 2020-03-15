import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import WeatherImage from "../components/WeatherImage";

//API Key
const defaultKey = "98387b5ecfc7a23f50ccd2becb2faa10";

function Home() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(`Seoul`);

    const [cloudiness, setCloudiness] = useState(0);
    const [currentTemperature, setCurrentTemperature] = useState('');
    const [currentTemperatureHigh, setCurrentTemperatureHigh] = useState('');
    const [currentTemperatureLow, setCurrentTemperatureLow] = useState('');
    const [currentHumidity, setCurrentHumidity] = useState('');
    const [currentWind, setCurrentWind] = useState('');
    const [weatherType, setWeatherType] = useState('Clouds');

    let history = useHistory();

    useEffect(() => {
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let city = urlParams.get("city");
        if(city) {
           setCity(city);
        }
    }, [history]);

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
    }, [city]); //brackets are parameters which anonymous useEffect function executes on

    useEffect(()=> {
       if (weatherData.main) {
           setCurrentTemperature(weatherData.main.temp);
           setCurrentTemperatureHigh(weatherData.main.temp_max);
           setCurrentTemperatureLow(weatherData.main.temp_min);
           setCurrentHumidity(weatherData.main.humidity);
           setCurrentWind(weatherData.wind.speed);

           let cloudinessValue = weatherData.clouds.all/250;
           setCloudiness(cloudinessValue);

           setWeatherType(weatherData.weather[0].main);
       }
    }, [weatherData]);

    return (
        <div className="WeatherWrapper" style={{backgroundColor: `rgba(0, 80, 110, ${cloudiness})`}}>
            <div className="Home">
                <h1>Weather in {city}</h1>
                <div className="WeatherInfo">
                    <WeatherImage weatherType={weatherType}/>

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
        </div>
    );

}

export default Home