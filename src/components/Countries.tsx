import { Grid } from "@chakra-ui/react";
import { CountryCard } from "./CountryCard";

interface CountriesProps {
  countries: any[];
}

export const Countries: React.FC<CountriesProps> = ({ countries }) => {
  console.log(countries);
  const renderCountries = () => {
    return countries.map((country) => <CountryCard country={country} />);
  };

  return (
    <Grid
      templateColumns="repeat(auto-fit, 250px)"
      gap="2rem"
      mx="auto"
      justifyContent="center"
    >
      {renderCountries()}
    </Grid>
  );
};
