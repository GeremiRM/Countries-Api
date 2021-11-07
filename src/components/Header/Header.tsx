import Link from "next/link";

import { Text, useColorMode, Button, Box, HStack } from "@chakra-ui/react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { Wrapper } from "../Wrapper";
import { bgElement } from "../../theme";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = bgElement();

  return (
    <Box bg={bg} py={{ base: "1.5rem", lg: "2.5rem" }} mb="2.25rem">
      <Wrapper>
        <HStack justify="space-between">
          <Link href="/">
            <Text
              fontWeight="800"
              fontSize={{ base: "16px", md: "24px" }}
              cursor="pointer"
            >
              Where in the world?
            </Text>
          </Link>
          <Button
            leftIcon={colorMode === "light" ? <FaRegMoon /> : <FaRegSun />}
            onClick={toggleColorMode}
            bg="inherit"
            border="none"
            fontSize={{ base: "14px", md: "18px" }}
          >
            {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </HStack>
      </Wrapper>
    </Box>
  );
};
