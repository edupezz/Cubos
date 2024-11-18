import React from "react";

import { HeaderContainer, LogoContainer, ThemeSwitchingButtonContainer } from "./styles";
import { Logo } from "../../atoms/Logo";
import { SunIconElement } from "../../atoms/SunIcon";

export const Header = (): JSX.Element => {

    return(
        <HeaderContainer>
            <LogoContainer>
                <Logo />
                <span>Movies</span>
            </LogoContainer>
            <ThemeSwitchingButtonContainer>
                <SunIconElement />
            </ThemeSwitchingButtonContainer>
        </HeaderContainer>
    )
}

export default Header;