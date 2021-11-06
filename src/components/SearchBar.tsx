import { Box, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  setSearchInput: Dispatch<SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchInput }) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftAddon children="+234" bg="inherit" border="none" />
        <Input type="text" placeholder="Search for a country..." />
      </InputGroup>
    </Box>
  );
};
