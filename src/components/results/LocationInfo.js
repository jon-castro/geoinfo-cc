import React, { Fragment, useContext } from "react";
import Accordion from "react-collapsy";

import ResultsContext from "../../context/results/resultsContext";

require("../../../node_modules/react-collapsy/lib/index.css");

const LocationInfo = () => {
  const resultsContext = useContext(ResultsContext);
  const { locationInfo } = resultsContext;

  return (
    <Fragment>
      <div>
        <div>
          {locationInfo
            .filter((location) => {
              if (location.properties.name === "") {
                return false;
              }
              return true;
            })
            .map((location) => {
              return (
                <Accordion key={location.id} title={location.properties.name}>
                  <p>
                    <strong>Kind: </strong>
                    {location.properties.kinds}
                  </p>
                </Accordion>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default LocationInfo;
