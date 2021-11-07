import { Box, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { bgElement, textInput } from "./styles/colorModes";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
}) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const bg = bgElement();
  const color = textInput();

  return (
    <Box
      color={color}
      borderRadius="4px"
      mb="2rem"
      bg={bg}
      h="100%"
      w={{ sm: "60%", lg: "40%" }}
      boxShadow="md"
    >
      <InputGroup h="100%" p={"0.5rem"} pl="1.5rem" borderRadius="inherit">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray" />}
          position="relative"
        />
        <Input
          type="text"
          placeholder="Search for country..."
          pl="1.5rem"
          variant="unstyled"
          fontSize={{ base: "inherit", md: "18px" }}
          _placeholder={{ color: "gray" }}
          onChange={handleChange}
          value={searchInput}
        />
      </InputGroup>
    </Box>
  );
};
