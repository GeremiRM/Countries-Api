import { Box, Grid } from "@chakra-ui/react";
import { CountryCard } from "./CountryCard";

interface CountriesProps {
  countries: any[];
}

export const Countries: React.FC<CountriesProps> = ({ countries }) => {
  const renderCountries = () => {
    return countries.map((country) => (
      <CountryCard country={country} key={country.name.common} />
    ));
  };

  return (
    <Box pb="3rem">
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, 250px)",
          xl: "repeat(auto-fit, 250px)",
        }}
        gap="2rem"
        mx="auto"
        justifyContent={{ base: "center" }}
      >
        {renderCountries()}
      </Grid>
    </Box>
  );
};
