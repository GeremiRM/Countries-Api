import { Text, useColorMode, Button, Box, HStack } from "@chakra-ui/react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { Wrapper } from "../Wrapper";
import { bgElement } from "../styles/colorModes";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = bgElement();

  return (
    <Box bg={bg} p="1.5rem 0" mb="1.5rem">
      <Wrapper>
        <HStack justify="space-between">
          <Text fontWeight="800" fontSize="16px">
            Where in the world?
          </Text>
          <Button
            leftIcon={colorMode === "light" ? <FaRegMoon /> : <FaRegSun />}
            onClick={toggleColorMode}
            bg="inherit"
            border="none"
            fontSize="14px"
          >
            {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </HStack>
      </Wrapper>
    </Box>
  );
};
