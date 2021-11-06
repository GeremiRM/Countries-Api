import { createContext, useState } from "react";

export const CountriesContext = createContext("");

const fetchData = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const response = await data.json();
  return response;
};

export const CountriesProvider = async () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFiltCountries] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const response = await data.json();
  };
};
