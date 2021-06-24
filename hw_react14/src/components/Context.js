import React, { useState } from "react";
// import { Country, City, State } from "country-state-city";
import SelectLocation from './SelectLocation'


export const PageContext = React.createContext();

export const PageContextProvider = (props) => {
  const [location, setLocation] = useState({
    country: "",
    city: "",
    
  });

  const ChangeLocation = (country) => {
    setLocation({ ...location, country: country ,city:""});
  };
  const changeCity = (city) => {
    setLocation({ ...location, city: city });
  }

  return (
    <PageContext.Provider value={{ location, setLocation }}>
      <div className={"m-4"}>
        <div style={{fontWeight:500, fontSize:'1.4rem'}}>Please select your location:</div>

        <SelectLocation ChangeLocation={ChangeLocation} changeCity={changeCity}/>
        
        {props.children}
      </div>
    </PageContext.Provider>
  );
};
