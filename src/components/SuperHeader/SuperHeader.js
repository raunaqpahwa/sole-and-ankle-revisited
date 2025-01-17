import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import { queries } from "../../utils";

const SuperHeader = () => {
  return (
    <Wrapper>
      <SubWrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </SubWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray[900]};
  ${queries.laptop} {
    height: 4px;
  }

  ${queries.tablet} {
    height: 4px;
  }

  ${queries.mobile} {
    height: 4px;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;
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

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
