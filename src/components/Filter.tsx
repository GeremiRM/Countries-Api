import { Select, useColorModeValue } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

interface FilterProps {
  setFilter: Dispatch<SetStateAction<string>>;
}

const Regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  const elementBg = useColorModeValue("hsl(0, 0%, 100%)", "hsl(209, 23%, 22%)");

  const renderOptions = () => {
    return Regions.map((region) => (
      <option key={region} value={region}>
        {region}
      </option>
    ));
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Select
      onChange={handleChange}
      placeholder="Filter by Region"
      fontSize="inherit"
      bg={elementBg}
      w={{ base: "60%", sm: "25%", lg: "15%" }}
      h="3.5rem"
      mb="2.5rem"
      boxShadow="md"
    >
      {renderOptions()}
    </Select>
  );
};
