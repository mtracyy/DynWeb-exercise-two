import React from 'react';

//API Key
const defaultkey = "98387b5ecfc7a23f50ccd2becb2faa10";

function Home() {

    return (
        <div className="Home">
            <h1>Weather in "City"</h1>
            <div className="WeatherInfo">
                <div className="WeatherInfo_Image">
                    <img src="" alt=""/>
                </div>

                <div className="WeatherInfo_Data">
                    <div className="CurrentTemperature">
                        <p className="CurrentTemperatureTemp">48&#176;</p>
                        <p className="CurrentTemperatureLabel">Current Temperature</p>
                    </div>

                    <div className="OtherTemperatures">
                        <p>High Temp: <strong>53&#176;</strong></p>
                        <p>Low Temp: <strong>32&#176;</strong></p>
                    </div>

                    <p>Humidity:</p>
                    <p>Wind:</p>
                </div>
            </div>
        </div>
    );

}

export default Home