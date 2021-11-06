import { createContext, useState, useEffect } from "react";

interface IContext {
  countries: any[];
  filteredCountries: any[];
  setFilteredCountries: any;
}

export const CountriesContext = createContext<IContext>({} as IContext);

// Maximum amount of elements per page
export const MAX_ELEMENTS = 20;

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const response = await data.json();
      const sortedArray = response.sort((a, b) =>
        a.name.common < b.name.common ? -1 : 1
      );
      setCountries(sortedArray);
      setFilteredCountries(
        sortedArray.slice(0 * MAX_ELEMENTS, 0 + MAX_ELEMENTS)
      );
    };
    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries: countries,
        filteredCountries: filteredCountries,
        setFilteredCountries,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};
