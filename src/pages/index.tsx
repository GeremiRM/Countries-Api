import { useState, useEffect, useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

import { Box, Button } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Filter } from "../components/Filter";
import { SearchBar } from "../components/SearchBar";
import { Countries } from "../components/Countries";
import { Wrapper } from "../components/Wrapper";

import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";
import { bgBody, textColor } from "../components/styles/colorModes";

import { MAX_ELEMENTS } from "../context/CountriesContext";

const Index: React.FC<{}> = ({}) => {
  const { countries, filteredCountries, setFilteredCountries } =
    useContext(CountriesContext);

  const [filter, setFilter] = useState("");

  const [searchInput, setSearchInput] = useState("");

  const bg = bgBody();
  const color = textColor();

  const filterCountries = (countriesList = countries) => {
    switch (filter) {
      case "Africa":
        return countriesList.filter((country) => country.region === "Africa");
      case "America":
        return countriesList.filter((country) => country.region === "Americas");
      case "Asia":
        return countriesList.filter((country) => country.region === "Asia");
      case "Europe":
        return countriesList.filter((country) => country.region === "Europe");
      case "Oceania":
        return countriesList.filter((country) => country.region === "Oceania");
      default:
        return countriesList;
    }
  };

  useEffect(() => {
    setFilteredCountries(filterCountries());
  }, [filter]);

  // useEffect(() => {

  // },[searchInput])

  return (
    <Box bg={bg} color={color} fontSize="14px" fontFamily="Nunito Sans">
      <Header />
      <Wrapper>
        <Box display={{ sm: "flex" }} justifyContent={{ sm: "space-between" }}>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <Filter setFilter={setFilter} />
        </Box>
        <Countries countries={filteredCountries} />
        <Button>Load More</Button>
      </Wrapper>
    </Box>
  );
};

export default Index;
