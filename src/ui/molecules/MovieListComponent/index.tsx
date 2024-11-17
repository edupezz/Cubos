/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import MoviesServices from "../../../services/MoviesServices";

import { MovieListContainer, CardContainer } from "./styles";

const MovieListComponent = (): JSX.Element => {

    const [trendMoviesList, setTrendMoviesList] = React.useState<any>(null)

    React.useEffect(() => {
        MoviesServices.fetchTrending().then((result) => {
            setTrendMoviesList(result)
            console.log(result)
        })
    },[])

    console.log(trendMoviesList)

    const MovieItem = (): JSX.Element => {
        const card = trendMoviesList && trendMoviesList?.results?.map((movie: any) => {
            
            return(
                <CardContainer>
                    <div key={movie.id}>{movie.title}</div>
                </CardContainer>
            )
        })
        return card;
    }

    return(
        <MovieListContainer>
            
                <MovieItem />
           
        </MovieListContainer>
    );
};

export default MovieListComponent;
