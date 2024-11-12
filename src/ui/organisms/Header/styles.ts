import styled from "styled-components";

export const HeaderContainer = styled.div`

    width: 100%;
    background-color: #121113;
    opacity: 0.5;
    grid-area: header;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F1E6FD30;
`;

export const LogoContainer = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 1vw;

    span{
        color: #EEEEF0;
        font-size: 2rem;
        font-weight: 700;
        margin-left: 16px;
    }

`;

export const ThemeSwitchingButtonContainer = styled.div`

    width: 4.5vw;
    height: 4.5vh;
    display: flex;
    background-color: #B744F7;
    border-radius: 2px;
    margin-right: 1vw;
    backdrop-filter: blur(4px);
    cursor: pointer;

    :first-child {
        display: flex;
        border-radius: 2px;
        align-items: center;
        justify-content: center;
    }

`