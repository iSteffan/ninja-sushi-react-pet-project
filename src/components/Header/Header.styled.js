import styled from 'styled-components';
import { ReactComponent as NinjaLogo } from '../../images/ninja-logo.svg';
import { ReactComponent as NinjaLogoMobile } from '../../images/ninja-logo-mobile.svg';

export const Logo = styled(NinjaLogo)`
  display: none;

  @media screen and (min-width: 1576px) {
    display: block;
  }
`;

export const LogoMobile = styled(NinjaLogoMobile)`
  display: block;

  @media screen and (min-width: 1576px) {
    display: none;
  }
`;
