import { useState, useEffect, useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Filter } from "../components/Filter";
import { SearchBar } from "../components/SearchBar";
import { Countries } from "../components/Countries";
import { Wrapper } from "../components/Wrapper";

import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";
import { bgBody, textColor } from "../components/styles/colorModes";

const Index: React.FC<{}> = ({}) => {
  const { countries, filteredCountries, setFilteredCountries } =
    useContext(CountriesContext);
  const [filter, setFilter] = useState("blah");
  const [searchInput, setSearchInput] = useState("");

  const bg = bgBody();
  const color = textColor();

  useEffect(() => {
    const filterCountries = () => {
      switch (filter) {
        case "Africa":
          return countries.filter((country) => country.region === "Africa");
        case "America":
          return countries.filter((country) => country.region === "America");
        case "Asia":
          return countries.filter((country) => country.region === "Asia");
        case "Europe":
          return countries.filter((country) => country.region === "Europe");
        case "Oceania":
          return countries.filter((country) => country.region === "Oceania");
        default:
          return countries;
      }
    };
    setFilteredCountries(filterCountries());
  }, [filter]);

  return (
    <Box bg={bg} color={color} fontSize="14px" fontFamily="Nunito Sans">
      <Header />
      <Wrapper>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <Filter setFilter={setFilter} />
        <Countries countries={filteredCountries} />
      </Wrapper>
    </Box>
  );
};

export default Index;
