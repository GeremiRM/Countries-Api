import React, { useContext } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { CountriesContext } from "../context/CountriesContext";
import { Box, Button, Grid, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Wrapper } from "../components/Wrapper";
import { bgBody, bgElement, textColor } from "../components/styles/colorModes";

import { FaArrowLeft } from "react-icons/fa";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";

const country: React.FC<{}> = ({}) => {
  const { filteredCountries } = useContext(CountriesContext);
  const router = useRouter();
  const { country } = router.query;
  const bg = bgBody();
  const color = textColor();
  const bgButton = bgElement();

  const countryInfo = filteredCountries.find((c) => country === c.name.common);

  const renderNativeNames = (nativeNames) => {
    let text = [];
    for (let name in nativeNames) {
      text.push(`${countryInfo.languages[name]}: ${nativeNames[name].common}`);
    }
    return text.join(", ");
  };

  const renderLanguages = (languages) => {
    let text = [];
    for (let lang in languages) {
      text.push(languages[lang]);
    }
    return text.join(", ");
  };

  const renderBorderCountries = (borders) => {
    return borders.map((border) => {
      const borderCountry = getBorderCountry(border).name.common;
      return (
        <Text
          display="block"
          p="0.25rem 0.5rem"
          bg={bgButton}
          textAlign="center"
          key={borderCountry}
          borderRadius="2px"
          fontSize="14px"
        >
          <Link href={`${borderCountry}`}>{borderCountry}</Link>
        </Text>
      );
    });
  };

  const getBorderCountry = (border) => {
    return filteredCountries.find((country) => country.cca3 === border);
  };

  const renderCurrencies = (currencies) => {
    let text = [];
    for (let currency in currencies) {
      text.push(currencies[currency].name);
    }
    return text.join(", ");
  };

  if (countryInfo) console.log(countryInfo);
  return (
    <Box bg={bg} color={color} fontFamily="Nunito Sans" pb="2rem">
      <Header />
      <Wrapper>
        <Button
          leftIcon={<FaArrowLeft />}
          px="1.75rem"
          borderRadius="1px"
          fontWeight="300"
          bg={bgButton}
          mb="3.75rem"
        >
          <Link href="/">Back</Link>
        </Button>
        {countryInfo && (
          <Stack spacing="2.5rem">
            <Box
              bg={`url(${countryInfo.flags.svg}) no-repeat center/cover`}
              h="200px"
            ></Box>
            <Stack spacing="0.75rem">
              <Text fontSize="1.5rem" fontWeight="800" mb="1rem">
                {countryInfo.name.common}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Native Name:{" "}
                </Box>
                {renderNativeNames(countryInfo.name.nativeName)}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Population:{" "}
                </Box>
                {Number(countryInfo.population).toLocaleString()}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Region:{" "}
                </Box>
                {countryInfo.region}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Sub Region:{" "}
                </Box>
                {countryInfo.subregion}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Capital:{" "}
                </Box>
                {countryInfo.capital}
              </Text>
            </Stack>
            <Stack spacing="0.5rem">
              <Text>
                <Box as="span" fontWeight="600">
                  Top Level Domain:{" "}
                </Box>
                {countryInfo.tld}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Currencies:{" "}
                </Box>
                {renderCurrencies(countryInfo.currencies)}
              </Text>
              <Text>
                <Box as="span" fontWeight="600">
                  Languages:{" "}
                </Box>
                {renderLanguages(countryInfo.languages)}
              </Text>
            </Stack>
            <Box>
              <Text fontSize="16px" fontWeight="600" mb="1rem">
                Border Countries:{" "}
              </Text>
              <Grid templateColumns="repeat(3, 1fr)" gap="0.5rem">
                {countryInfo.borders &&
                  renderBorderCountries(countryInfo.borders)}
              </Grid>
            </Box>
          </Stack>
        )}
      </Wrapper>
    </Box>
  );
};

export default country;
