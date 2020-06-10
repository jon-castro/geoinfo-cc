import React, { Fragment, useContext } from "react";
import Accordion from "react-collapsy";

import ResultsContext from "../../context/results/resultsContext";

require("../../../node_modules/react-collapsy/lib/index.css");

const LocationInfo = () => {
  const resultsContext = useContext(ResultsContext);
  const { locationInfo } = resultsContext;
  const locationsList = [];

  const locationAccordionList = (locationInfo, locationsList) => {
    if (locationInfo) {
      locationInfo.map((location) => {
        return locationsList.push(
          <Accordion key={location.id} title={location.name}>
            <div>
              <span>
                <strong>Type: </strong>
                {location.categories[0].name}
              </span>
            </div>
            <br />
            <div>
              <strong>Address: </strong>
              <span>
                {location.location.address} {location.location.city},{" "}
                {location.location.country}
              </span>
            </div>
          </Accordion>
        );
      });
    }
  };

  return (
    <Fragment>
      <div>
        <div>
          {locationAccordionList(locationInfo, locationsList)}
          {locationsList}
        </div>
      </div>
    </Fragment>
  );
};

export default LocationInfo;
