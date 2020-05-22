import React from "react";

import CurrentWeather from "./CurrentWeather";

const Results = () => {
  let state = {
    currentWeather: [
      {
        coord: {
          lon: -0.13,
          lat: 51.51,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        base: "stations",
        main: {
          temp: 292.67,
          feels_like: 289.04,
          temp_min: 292.04,
          temp_max: 293.15,
          pressure: 1014,
          humidity: 34,
        },
        visibility: 10000,
        wind: {
          speed: 3.1,
          deg: 160,
        },
        clouds: {
          all: 100,
        },
        dt: 1590110804,
        sys: {
          type: 1,
          id: 1414,
          country: "GB",
          sunrise: 1590119930,
          sunset: 1590177354,
        },
        timezone: 3600,
        id: 2643743,
        name: "London",
        cod: 200,
      },
      {
        coord: {
          lon: -66.09,
          lat: 18.45,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        base: "stations",
        main: {
          temp: 301.18,
          feels_like: 303.03,
          temp_min: 300.37,
          temp_max: 302.15,
          pressure: 1015,
          humidity: 70,
        },
        visibility: 16093,
        wind: {
          speed: 4.1,
          deg: 170,
        },
        clouds: {
          all: 20,
        },
        dt: 1590108394,
        sys: {
          type: 1,
          id: 8793,
          country: "PR",
          sunrise: 1590054540,
          sunset: 1590101597,
        },
        timezone: -14400,
        id: 4568138,
        name: "San Juan",
        cod: 200,
      },
    ],
  };

  return (
    <div>
      {state.currentWeather.map((city) => (
        <div>
          <CurrentWeather key={city.id} city={city} />
        </div>
      ))}
    </div>
  );
};

export default Results;
