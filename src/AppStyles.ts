import styled from "styled-components";

export const MainContainer = styled.main`

    background-color: lightpink;
    height: 100%;
    display: grid;
    grid-template: 10% 10fr 1fr / 1fr;
    grid-template-areas: 
        "header"
        "content"
        "footer";
`