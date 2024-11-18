import styled from "styled-components";

export const MovieListContainer = styled.div`

    width: 90%;
    padding: 24px;
    grid-area: movieListArea;
    background-color: #EBEAF814;
    backdrop-filter: blur(4px);
    border-radius: 4px;

    .ant-card-meta-title {
        font-size: 1.4rem;
        font-weight: 500;
    }

    .ant-card-body {
        padding: 20px;
    }

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
