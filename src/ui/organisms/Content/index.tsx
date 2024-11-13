import React from "react";

import { ContentContainer } from "./styles";
import SearchComponent from "../../molecules/SearchComponent";
import MovieListComponent from "../../molecules/MovieListComponent";

const Content = () => {

    return(
        <ContentContainer>
            <SearchComponent />
            <MovieListComponent />
        </ContentContainer>
    );
};

export default Content;