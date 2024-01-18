import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { queries } from "../../utils";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MenuWrapper>
          <MenuBar>
            <Icon id={"shopping-bag"} />
            <Icon id={"search"} />
            <MenuButton>
              <VisuallyHidden>Menu</VisuallyHidden>
              <Icon id={"menu"} onClick={() => setShowMobileMenu(true)} />
            </MenuButton>
          </MenuBar>
        </MenuWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MenuButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  ${queries.mobile} {
    padding: 18px 16px;
  }
`;

const MenuBar = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: baseline;
  height: 100%;

  ${queries.mobile} {
    gap: 16px;
  }
`;

const MenuWrapper = styled.div`
  display: none;
  height: 100%;

  ${queries.laptop} {
    display: block;
  }

  ${queries.tablet} {
    display: block;
  }

  ${queries.mobile} {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 14vw - 6rem, 4rem);
  margin: 0px 48px;

  ${queries.laptop} {
    display: none;
  }

  ${queries.tablet} {
    display: none;
  }

  ${queries.mobile} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
