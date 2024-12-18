import React from "react";

import { SearchComponentContainer } from "./styles";

import SearchBox from "../../atoms/SearchBox";
import FilterButton from "../../atoms/FilterButton";

const SearchComponent = (): JSX.Element => {

    return(
        <SearchComponentContainer>
            <SearchBox />
            <FilterButton />
        </SearchComponentContainer>
    );
};

export default SearchComponent;