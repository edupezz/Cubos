import styled from "styled-components";

export const ContentContainer = styled.section`

    width: 100%;
    background-color: fuchsia;
    display: grid;
    justify-items: center;
    grid-template: 10% 10% 70% 10% / 1fr;
    grid-area: content;
    grid-template-areas: 
        "searchArea"
        "filterArea"
        "movieListArea"
        "paginationArea";
`