import React, {useContext} from "react";

import ResultsContext from "../../context/results/resultsContext";

const Results = () => {
  const resultsContext = useContext(ResultsContext);
  const { coordinates, address, currentWeather, getCurrentWeather, loading } = resultsContext;

  return (
    <div>
      {/* {state.currentWeather.map((city) => (
        <div>
          <CurrentWeather key={city.id} city={city} />
        </div>
      ))} */}
      <div className="card">
        <div className="card-header">
          {coordinates && ((`Location: ${address}`))}
        </div>
        <div className="card-body">
          {loading ? `Temp: ${currentWeather[0].weather[0].description}` : " "}
        </div>
      </div>
    </div>
  );
};

export default Results;
