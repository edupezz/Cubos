import React from "react";
import MoviesServices from "../../../services/MoviesServices";

import { MovieListContainer } from "./styles";

const MovieListComponent = (): JSX.Element => {

    const [trendMoviesList, setTrendMoviesList] = React.useState<string | null>(null)

    React.useEffect(() => {
        MoviesServices.fetchTrending().then((result) => {
            setTrendMoviesList(result)
            console.log(result)
        })
    },[])

    console.log(trendMoviesList)

    return(
        <MovieListContainer>
            
        </MovieListContainer>
    );
};

export default MovieListComponent;
