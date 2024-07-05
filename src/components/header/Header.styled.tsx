import React, { useState } from "react";
import socialNetworkIcon from "../assets/icons/socialNetworkIcon.png";

import styled from "styled-components";
import { Input } from "../input/Input";

export const Header = () => {
  //---

  //---
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  //---
  return (
    <StyledHeader>
      <StyledIcon src={socialNetworkIcon} alt="socialNetworkIcon" />
      <div>
        <Input onChange={handleChange} placeholder={"Поиск"} />
      </div>
      <StyledLogo>SocialNetwork</StyledLogo>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  z-index: 100;
  border-radius: 20px;
  width: 100%;
  grid-area: header;
  background-color: #bb89a6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  cursor: pointer;
`;

const StyledLogo = styled.span`
  color: #3a2732;
  margin-right: 20px;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  cursor: pointer;
`;
