import React from "react";

import { useRouter } from "next/router";

interface countryProps {
  country: {
    name: {
      common: string;
      native: {
        natName: string;
      };
    };
    population: string;
    region: string;
    subregion: string;
    tld: [string];
    currencies: string;
    languages: {
      language: string;
    };
    borders: [string];
  };
}

const country: React.FC<countryProps> = ({ country }) => {
  const router = useRouter();

  return <div>Post: </div>;
};

export default country;
