import React, { Fragment, useContext } from "react";
import Accordion from "react-collapsy";

import ResultsContext from "../../context/results/resultsContext";

require("../../../node_modules/react-collapsy/lib/index.css");

const LocationInfo = () => {
  const resultsContext = useContext(ResultsContext);
  const { locationInfo } = resultsContext;
  // const list = [];

  // const locationAccordionList = (locationInfo, list) => {
  //   locationInfo
  //     .filter((location) => {
  //       if (location.properties.name === "") {
  //         return false;
  //       }
  //       return true;
  //     })
  //     .map((location) => {
  //       return list.push(
  //         <Accordion key={location.id} title={location.properties.name}>
  //           <div>
  //             <strong>Coordinates: </strong>
  //             <p>Latitude: {location.geometry.coordinates[1].toFixed(2)}</p>
  //             <p>Longitude: {location.geometry.coordinates[0].toFixed(2)}</p>
  //           </div>
  //           <br/>
  //           <div>
  //             <strong>Kind: </strong>
  //             {location.properties.kinds}
  //           </div>
  //         </Accordion>
  //       );
  //     });
  // };

  // const showLocs = () => {
  //   let count = 0;
  //   const listing = [];
  //   let currentCount = count;
  //   while (count !== currentCount + 5) {
  //     count = count + 1;
  //     listing.push(list[count]);
  //   }
  //   return listing;
  // };

  return (
    <Fragment>
      <div>
        <div>
          {locationInfo}
          {/* {locationAccordionList(locationInfo, list)}
          {showLocs()} */}
        </div>
      </div>
    </Fragment>
  );
};

export default LocationInfo;
