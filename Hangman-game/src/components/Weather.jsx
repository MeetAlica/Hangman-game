import { useState, useEffect } from "react";
import backgroundImage from "../../public/weather.jpg";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8127cd0a247a850c7ef651c05220be52&units=metric`
            );
            const data = await response.json();
            setWeatherData(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center bg-white rounded text-sm sm:text-base md:text-lg m-2 p-2 bg-cover bg-center font-bold"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {weatherData && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          />
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.name}</p>
          <p>{weatherData.main.temp}°C</p>
        </>
      )}
    </div>
  );
};

export default Weather;
