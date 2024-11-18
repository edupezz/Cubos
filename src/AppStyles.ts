import styled from "styled-components";
import bg from './assets/backgropund-krists-luhaers-unsplash.png';

export const MainContainer = styled.main`

    display: grid;
    grid-template: 80px 1fr 68px / 1fr;
    grid-template-areas: 
        "header"
        "content"
        "footer";

    background-image: url(${bg});

`
