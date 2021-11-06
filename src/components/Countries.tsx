import { Grid, Box } from "@chakra-ui/react";
import { CountryCard } from "./CountryCard";

interface CountriesProps {
  countries: any[];
}

export const Countries: React.FC<CountriesProps> = ({ countries }) => {
  const renderCountries = () => {
    return countries.map((country) => (
      <CountryCard key={country.name.common} country={country} />
    ));
  };

  return <Grid>{renderCountries()}</Grid>;
};
