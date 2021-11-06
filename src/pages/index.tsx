import { useState, useEffect } from "react";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Filter } from "../components/Filter";
import { SearchBar } from "../components/SearchBar";
import { Countries } from "../components/Countries";

const Index: React.FC<{}> = ({}) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const response = await data.json();
      setCountries(response);
    };
    fetchCountries();
  }, []);

  return (
    <Box>
      <Header />
      <Filter setFilter={setFilter} />
      <SearchBar setSearchInput={setSearchInput} />
      <Countries countries={countries} />
    </Box>
  );
};

export default Index;
