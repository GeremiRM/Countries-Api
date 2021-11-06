import { Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { Dispatch, FormEvent, SetStateAction } from "react";

interface FilterProps {
  setFilter: Dispatch<SetStateAction<string>>;
}

const Regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  const renderOptions = () => {
    return Regions.map((region) => (
      <option key={region} value={region} onChange={handleChange}>
        {region}
      </option>
    ));
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return <Select placeholder="Select option">{renderOptions()}</Select>;
};
