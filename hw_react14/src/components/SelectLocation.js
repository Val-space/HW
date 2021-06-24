import React, { useContext } from "react";
import { Country, City } from "country-state-city";
import { PageContext } from "./Context";

function SelectLocation({ ChangeLocation, changeCity }) {
  const { location } = useContext(PageContext);
  let selectedCountry = Country.getAllCountries().filter(
    (country) => country.name === location.country
  );
//   console.log(City.getCitiesOfCountry(selectedCountry[0].isoCode))

  return (
    <>
      <div className='' style={{width:'30%'}}>
        <select className='form-control my-3' onChange={(e) => ChangeLocation(e.target.value)}>
          <option>Select your country</option>
          {Country.getAllCountries().map((country) => (
            <option key={country.isoCode.toString()} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <select className='form-control' onChange={(e) => changeCity(e.target.value)}>
          <option value="">Your city</option>
          {selectedCountry[0]
            ? City.getCitiesOfCountry(selectedCountry[0].isoCode).map(
                (state,id) => (
                  <option key={state.name + id} value={state.name}>
                    {state.name}
                  </option>
                )
              )
            : ""}
        </select>
      </div>
    
    </>
  );
}

export default SelectLocation;
