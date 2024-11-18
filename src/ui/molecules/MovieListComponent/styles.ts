import styled from "styled-components";

export const MovieListContainer = styled.div`

    width: 90%;
    background-color: darkkhaki;
    grid-area: movieListArea;
    /* display: flex;
    flex-flow: column wrap;
    justify-content: space-around; */

    .ant-card-meta-title {
        font-size: 1.4rem;
        font-weight: 500;
    }

    .ant-card-body {
        padding: 20px;
    }

    /* .ant-spin-container div{
        background-color: gold;
        padding: 0;
        margin: 0;

        div{
            background-color: darkblue;
            padding: 0;
            margin: 0;
        }
    } */

`;

export const CardContainer = styled.div`

    width: 15%;
    height: 40%;
    margin: 10px;
    background-color: royalblue;
    display: flex;
    flex-flow: column;
    align-items: center;
`;
