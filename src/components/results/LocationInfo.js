import React, { Fragment, useContext, useState } from "react";
import Accordion from "react-collapsy";

import ResultsContext from "../../context/results/resultsContext";

require("../../../node_modules/react-collapsy/lib/index.css");

const LocationInfo = () => {
  const resultsContext = useContext(ResultsContext);
  const { locationInfo } = resultsContext;
  const list = [];

  const [count, setCount] = useState(0);

  const locationAccordionList = (locationInfo, list) => {
    locationInfo
      .filter((location) => {
        if (location.properties.name === "") {
          return false;
        }
        return true;
      })
      .map((location) => {
        return list.push(
          <Accordion key={location.id} title={location.properties.name}>
            <p>
              <strong>Kind: </strong>
              {location.properties.kinds}
            </p>
          </Accordion>
        );
      });
    console.log(list);
  };

  const showLocs = (count) => {
    // let a;
    // for (let count; count < count + 10; setCount(count++)) {
    //   a = list[count];
    // }
    // return a;
    return list[count]
  };

  const showMore = (count) => {
    showLocs(count);
  };

  return (
    <Fragment>
      <div>
        <div>
          {/* {locationInfo
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
            })} */}
          {locationAccordionList(locationInfo, list)}
          {showLocs(count)}
          <button onClick={showMore(count)}>Show More</button>
        </div>
      </div>
    </Fragment>
  );
};

export default LocationInfo;
