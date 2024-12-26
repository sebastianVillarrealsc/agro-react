import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Importa el archivo CSS

const Weather = () => {
    const [city, setCity] = useState('');
    const [locationKey, setLocationKey] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = 'lhzbwHj8nXKiWpi68IoMgH6RiPWHXIhA'; // Reemplaza con tu clave API de AccuWeather

    const getLocationUrl = (city) => 
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;

    const getWeatherUrl = (locationKey) => 
        `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=es-es`;

    const fetchLocationKey = async () => {
        if (city.trim() === '') {
            setError("Por favor, ingresa una ciudad.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const locationResponse = await axios.get(getLocationUrl(city));
            if (locationResponse.data.length > 0) {
                const cityData = locationResponse.data[0];
                const locationKey = cityData.Key;
                setLocationKey(locationKey);
                fetchWeather(locationKey);
            } else {
                setError("No se encontró la ciudad.");
                setLoading(false);
            }
        } catch (err) {
            setError("Error al obtener el Location Key.");
            setLoading(false);
        }
    };

    const fetchWeather = async (locationKey) => {
        try {
            const weatherResponse = await axios.get(getWeatherUrl(locationKey));
            setWeatherData(weatherResponse.data[0]);
            setLoading(false);
        } catch (err) {
            setError("Error al obtener el pronóstico del tiempo.");
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchLocationKey();
    };

    return (
        <div className="weather-container">
            <h2 className="weather-header">Pronóstico del tiempo</h2>
            <form onSubmit={handleSubmit} className="weather-form">
                <input 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    placeholder="Ingresa una ciudad" 
                    className="weather-input" 
                />
                <button type="submit" className="weather-button">Consultar</button>
            </form>

            {loading && <p className="weather-loading">Cargando...</p>}
            {error && <p className="weather-error">{error}</p>}

            {weatherData && (
                <div className="weather-info">
                    <h3>{city}</h3>
                    <p className="weather-text">Estado: {weatherData.WeatherText}</p>
                    <p className="weather-temperature">{weatherData.Temperature.Metric.Value}°C</p>
                </div>
            )}
        </div>
    );
};

export default Weather;