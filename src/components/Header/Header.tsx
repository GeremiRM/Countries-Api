import { Text, useColorMode, Button, Box, HStack } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Wrapper } from "../Wrapper";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Wrapper>
        <HStack justify="space-between">
          <Text>Where in the world?</Text>
          <Button
            leftIcon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
          >
            {colorMode} Mode
          </Button>
        </HStack>
      </Wrapper>
    </Box>
  );
};
