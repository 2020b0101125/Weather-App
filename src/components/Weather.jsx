import React, { useEffect, useState, useRef } from "react";
import "./weather.css";
import search_icon from "../assets/search_icon1.png";
// import clear_icon from "../assets/clear.png";
// import cloudy_icon from "../assets/cloudy1.png";
// import drizzle_icon from "../assets/drizzle.png";
import humid_icon from "../assets/humid.png";
// import rain from "../assets/rain_heavy.png";
// import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind1.png";

const Weather = () => {
  const [weatherdata, setWeatherData] = useState({});
  const inputRef = useRef();
  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `http://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${city}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setWeatherData({
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        temperature: data.current.temp_c,
        location: data.location.name,
        icon: "https:" + data.current.condition.icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.log(error);
    }
  };
  useEffect(() => {
    search("lucknow");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="search" />
        <img src={search_icon} onClick={() => search(inputRef.current.value)} />
      </div>
      {weatherdata ? (
        <>
          <img src={weatherdata.icon} className="weather-icon" />
          <p className="temperature">{weatherdata.temperature}°C</p>
          <p className="location">{weatherdata.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humid_icon} />
              <div className="data-text">
                <p>{weatherdata.humidity}%</p>
                <span>humid</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} />
              <div className="data-text">
                <p>{weatherdata.wind} kmph</p>
                <span>wind</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
