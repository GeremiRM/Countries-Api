import React, { useContext } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { CountriesContext } from "../context/CountriesContext";
import { Box, Button, Grid, Image, Stack, Text, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Wrapper } from "../components/Wrapper";
import { bgBody, bgElement, textColor } from "../components/styles/colorModes";

import { FaArrowLeft } from "react-icons/fa";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";

const country: React.FC<{}> = ({}) => {
  const { countries } = useContext(CountriesContext);
  const router = useRouter();
  const { country } = router.query;
  const bg = bgBody();
  const color = textColor();
  const bgButton = bgElement();

  const countryInfo = countries.find((c) => country === c.name.common);

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

  const getBorderCountry = (border) => {
    return countries.find((country) => country.cca3 === border);
  };

  const renderBorderCountries = (borders) => {
    return borders.map((border) => {
      const {
        name: { common },
      } = getBorderCountry(border);
      return (
        <Link href={`${common}`} key={common}>
          <Text
            display="block"
            p="0.25rem 0.5rem"
            bg={bgButton}
            textAlign="center"
            borderRadius="2px"
            fontSize="14px"
            boxShadow="md"
            cursor="pointers"
          >
            {common}
          </Text>
        </Link>
      );
    });
  };

  const renderCurrencies = (currencies) => {
    let text = [];
    for (let currency in currencies) {
      text.push(currencies[currency].name);
    }
    return text.join(", ");
  };

  return (
    <Box bg={bg} color={color} fontFamily="Nunito Sans" pb="2rem" minH="100vh">
      <Header />
      <Wrapper>
        <Link href="/">
          <Button
            leftIcon={<FaArrowLeft />}
            px="1.75rem"
            borderRadius="1px"
            fontWeight="300"
            bg={bgButton}
            mb="3.75rem"
            boxShadow="md"
          >
            Back
          </Button>
        </Link>
        {countryInfo && (
          <Stack spacing="2.5rem" direction={{ base: "column", lg: "row" }}>
            <Box w={{ lg: "50%" }}>
              <Image
                src={countryInfo.flags.svg}
                w={{ base: "100%", lg: "90%" }}
                maxW={{ md: "600px", xl: "95%" }}
                maxH="50vh"
                height={{ base: "100%", xl: "auto" }}
              />
            </Box>
            <Box w={{ lg: "50%" }} alignSelf={{ lg: "center" }}>
              <Text
                fontSize={{ base: "1.5rem", lg: "2rem" }}
                fontWeight="800"
                mb="1rem"
              >
                {countryInfo.name.common}
              </Text>
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify={{ sm: "space-between" }}
                mb={{ lg: "4rem" }}
                fontSize={{ base: "16px", lg: "18px" }}
              >
                <Stack spacing="0.75rem" mb="2.5rem" mr="1rem">
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
                <Stack spacing="0.75rem" mb="2.5rem">
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
              </Flex>
              <Flex direction={{ base: "column", lg: "row" }}>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  fontWeight="600"
                  mb="1rem"
                  mr="2rem"
                >
                  Border Countries:{" "}
                </Text>

                <Grid
                  templateColumns="repeat(auto-fit, 100px)"
                  gap="0.5rem"
                  flex="1"
                  alignItems="flex-start"
                >
                  {countryInfo.borders &&
                    renderBorderCountries(countryInfo.borders)}
                </Grid>
              </Flex>
            </Box>
          </Stack>
        )}
      </Wrapper>
    </Box>
  );
};

export default country;
