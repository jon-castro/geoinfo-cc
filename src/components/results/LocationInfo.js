import React, { Fragment, useContext } from "react";
import Accordion from "react-collapsy";

import ResultsContext from "../../context/results/resultsContext";

require("../../../node_modules/react-collapsy/lib/index.css");

const LocationInfo = () => {
  const resultsContext = useContext(ResultsContext);
  const { locationInfo } = resultsContext;
  const locationsList = [];

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

  const locationAccordionList = (locationInfo, locationsList) => {
    if (locationInfo) {
      locationInfo.map((location) => {
        return locationsList.push(
          <Accordion key={location.id} title={location.name}>
            <div>
              <strong>Type: </strong>
              {/* <p>{location.categories[0].name}</p> */}
            </div>
            <br />
            {/* <div>
              <strong>Address: </strong>
              <p>{location.formattedAddress[0]}</p>
              <p>{location.formattedAddress[1]}</p>
              <p>{location.formattedAddress[2]}</p>
            </div> */}
          </Accordion>
        );
      });
    }
  };

  return (
    <Fragment>
      <div>
        <div>
          {/* {locationAccordionList(locationInfo, locationsList)} */}
          {/* {locationsList} */}
          {/* {locationAccordionList(locationInfo, list)}
          {showLocs()} */}
        </div>
      </div>
    </Fragment>
  );
};

export default LocationInfo;
