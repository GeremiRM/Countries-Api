import Link from "next/link";
import { Box, VStack, Text, SlideFade } from "@chakra-ui/react";

import { bgElement } from "../../theme";

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
  const bg = bgElement();

  return (
    <Link href={`/${country.name.common}`}>
      <SlideFade in={true} offsetY="100px">
        <Box
          borderRadius="5px"
          minH="320px"
          bg={bg}
          boxShadow="md"
          cursor="pointer"
          _hover={{ transform: "translateY(-20px)" }}
          transition="0.25s"
        >
          <Box
            bg={`url(${country.flags.svg}) no-repeat center/cover`}
            h="160px"
            borderTopLeftRadius="inherit"
            borderTopRightRadius="inherit"
            w="100%"
          ></Box>
          <VStack
            align="normal"
            spacing="0.75rem"
            p="1rem 2rem"
            borderBottomLeftRadius="inherit"
            borderBottomRightRadius="inherit"
          >
            <Text fontSize="18px" fontWeight="800">
              {country.name.common}
            </Text>
            <VStack align="normal" spacing="4px">
              <Text>
                <Box as="span" fontWeight="600">
                  Population:{" "}
                </Box>
                {Number(country.population).toLocaleString()}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Region:{" "}
                </Box>
                {country.region}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Capital:{" "}
                </Box>
                {country.capital}
              </Text>
            </VStack>
          </VStack>
        </Box>
      </SlideFade>
    </Link>
  );
};
