/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import MoviesServices from "../../../services/MoviesServices";

import { MovieListContainer } from "./styles";

import { List, Card } from 'antd';
import Meta from "antd/es/card/Meta";

const imgBaseUrl = import.meta.env.VITE_API_IMG_BASE_URL


const MovieListComponent = (): JSX.Element => {

    const [trendMoviesList, setTrendMoviesList] = React.useState<any>(null)

    React.useEffect(() => {
        MoviesServices.fetchTrending().then((result) => {
            setTrendMoviesList(result)
            console.log(result)
        })
    },[])

    console.log(trendMoviesList)

    // const MovieItem = (): JSX.Element => {
    //     const card = trendMoviesList && trendMoviesList?.results?.map((movie: any) => {
            
    //         return(
    //             <CardContainer>
    //                 <div key={movie.id}>{movie.title}</div>
    //             </CardContainer>
    //         )
    //     })
    //     return card;
    // }

    return(
        <MovieListContainer>
            <List itemLayout="horizontal" size="small"
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
                  }}
                pagination={{ 
                    onChange: (page) => {
                        console.log(page)
                    },
                    pageSize: 10,
                    position: 'bottom',
                    align: 'center',
                    responsive: true
                    
                }}
                dataSource={trendMoviesList?.results}
                renderItem={(item: any) => (
                    <List.Item
                        key={item.title}
                    >
                        <Card cover={<img src={imgBaseUrl + item.poster_path} />}
                            //style={{ width: 200 }}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </List.Item>
                )}

            />
             
        </MovieListContainer>
    );
};

export default MovieListComponent;
