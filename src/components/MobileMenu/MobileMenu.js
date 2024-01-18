/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay isOpen={isOpen}>
      <DialogContent>
        <Subwrapper>
          <NavWrapper>
            <CloseButton onClick={onDismiss}>
              <VisuallyHidden>Close</VisuallyHidden>
              <Icon id={"close"} />
            </CloseButton>
            <MobileNav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </MobileNav>
            <FooterWrapper>
              <FooterLink href="/terms">Terms and Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </FooterWrapper>
          </NavWrapper>
        </Subwrapper>
      </DialogContent>
    </DialogOverlay>
  );
};

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  font-weight: 500;
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  color: ${COLORS.gray[900]};
  font-size: ${18 / 16}rem;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const CloseButton = styled.button`
  border: none;
  padding: 16px;
  align-self: flex-end;
  background-color: transparent;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: ${32 / 16}rem;
`;

const MobileNav = styled.nav`
  display: flex;
  padding: ${32 / 16}rem;
  flex-direction: column;
  gap: 22px;
`;

const MobileMenuWrapper = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0deg, 0%, 0%, 0.5);
`;

const Subwrapper = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${COLORS.white};
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export default MobileMenu;
