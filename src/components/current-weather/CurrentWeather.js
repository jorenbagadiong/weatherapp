import React from "react";
import classes from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={classes.weather}>
      <div className={classes.top}>
        <div>
          <p className={classes.city}>{data.city}</p>
          <p className={classes.description}>{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className={classes.icon}
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className={classes.bottom}>
        <p className={classes.temperature}>{Math.round(data.main.temp)}°C</p>
        <div className={classes.details}>
          <div className={classes.parameter_row}>
            <span className={classes.parameter_label}>Details</span>
          </div>
          <div className={classes.parameter_row}>
            <span className={classes.parameter_label}>Feels like</span>
            <span className={classes.parameter_value}>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className={classes.parameter_row}>
            <span className={classes.parameter_label}>Wind</span>
            <span className={classes.parameter_value}>
              {data.wind.speed} m/s
            </span>
          </div>
          <div className={classes.parameter_row}>
            <span className={classes.parameter_label}>Humidity</span>
            <span className={classes.parameter_value}>
              {data.main.humidity}%
            </span>
          </div>
          <div className={classes.parameter_row}>
            <span className={classes.parameter_label}>Pressure</span>
            <span className={classes.parameter_value}>
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
