import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface IContext {
  countries: any[];
  filteredCountries: any[];
  setFilteredCountries: any;
}

export const CountriesContext = createContext<IContext>({} as IContext);

const fetchData = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const response = await data.json();
  return response;
};

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const response = await data.json();
      setCountries(response);
      setFilteredCountries(response);
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
