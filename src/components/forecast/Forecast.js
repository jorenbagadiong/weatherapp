import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import classes from "./Forecast.module.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  const foreCastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className={classes.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={classes.dailyItem}>
                  <img
                    alt="weather"
                    className={classes.iconSmall}
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className={classes.day}>{foreCastDays[idx]}</label>
                  <label className={classes.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={classes.minMax}>
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={classes.details}>
                <div className={classes.item}>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className={classes.item}>
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className={classes.item}>
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className={classes.item}>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={classes.item}>
                  <label>Sea level:</label>
                  <label className={classes.sea_level}>
                    {item.main.sea_level} m
                  </label>
                </div>
                <div className={classes.item}>
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
