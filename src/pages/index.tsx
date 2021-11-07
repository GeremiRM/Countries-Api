import { useState, useEffect, useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

import { MAX_ELEMENTS } from "../context/CountriesContext";
import { Box, Button } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Filter } from "../components/Navigation/Filter";
import { SearchBar } from "../components/Navigation/SearchBar";
import { Countries } from "../components/Countries/Countries";
import { Wrapper } from "../components/Wrapper";

import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";

import { bgBody, bgElement, textColor } from "../theme";

const Index: React.FC<{}> = ({}) => {
  const { countries, filteredCountries, setFilteredCountries } =
    useContext(CountriesContext);

  const [filter, setFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(0);

  const bg = bgBody();
  const color = textColor();
  const bgElem = bgElement();

  const filterByRegion = (countriesList = countries) => {
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

  const filterBySearch = (countriesList = countries) => {
    return countriesList.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  useEffect(() => {
    const filtCountries = filter === "" ? countries : filterByRegion();
    setFilteredCountries(filterBySearch(filtCountries));
    setPage(0);
  }, [filter, searchInput]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <Box
      bg={bg}
      color={color}
      fontSize="14px"
      fontFamily="Nunito Sans"
      pb="2rem"
      minH="100vh"
    >
      <Header />
      <Wrapper>
        <Box display={{ sm: "flex" }} justifyContent={{ sm: "space-between" }}>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <Filter setFilter={setFilter} />
        </Box>
        <Countries // Amount of items to be shown on screen
          countries={filteredCountries.slice(
            0,
            page * MAX_ELEMENTS + MAX_ELEMENTS
          )}
        />
        <Button
          onClick={loadMore}
          mx="auto"
          display={
            // Are there any more items to be loaded?
            page * MAX_ELEMENTS + MAX_ELEMENTS < filteredCountries.length
              ? "block"
              : "none"
          }
          bg={bgElem}
        >
          Load More
        </Button>
      </Wrapper>
    </Box>
  );
};

export default Index;
