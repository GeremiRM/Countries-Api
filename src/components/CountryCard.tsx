import { Box, Heading, Image, VStack, HStack, Text } from "@chakra-ui/react";
import React from "react";

interface CountryCardProps {
  country: {
    name: {
      common: string;
    };
    population: string;
    region: string;
    capital: string;
    flags: {
      svg: string;
    };
  };
}

// REMEMBER THERE'S A PROBLEM WITH ANDORRA'S FLAG

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Box>
      <Image src={country.flags.svg} alt={country.name.common} />
      <VStack>
        <Heading>{country.name.common}</Heading>
        <HStack>
          <Text>
            <Box as="span">Population:</Box>
            {country.population}
          </Text>
          <Text>
            <Box as="span">Region:</Box>
            {country.region}
          </Text>
          <Text>
            <Box as="span">Capital:</Box>
            {country.capital}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};
