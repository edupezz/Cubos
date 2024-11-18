import styled from "styled-components";

export const ContentContainer = styled.section`

    width: 100%;
    height: 100%;
    display: flex;
    display: grid;
    justify-items: center;
    grid-template: 104px 1fr 7fr 1fr / 1fr;
    grid-area: content;
    grid-template-areas: 
        "searchArea"
        "filterArea"
        "movieListArea"
        "paginationArea";
`