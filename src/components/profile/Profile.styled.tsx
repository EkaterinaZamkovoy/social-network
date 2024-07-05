import React from "react";
import { styled } from "styled-components";
import AvatarImg from "../assets/img/AvatarImg.png";

export const Profile = () => {
  return (
    <StyledProfile>
      <StyledAvatar src={AvatarImg} alt="Avatar" />
      <StyledDescription>
        <h2>Ptichka Sinichkina</h2>
        <h4>About me:</h4>
        <span>
          I enjoy learning new programming languages, with a keen interest in
          web development. In my free time, I often read science fiction and
          play the guitar.
        </span>
      </StyledDescription>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  min-width: 100%;
  width: 100vh;
  background-color: #bb89a6a9;
  grid-area: content;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
`;

const StyledAvatar = styled.img`
  width: 150px;
  border-radius: 10%;
  border: 3px solid #fefefe;
  padding: 10px;
  margin: 20px;
  background-color: #edeef0;
`;

const StyledDescription = styled.div`
  min-width: 300px;
  min-height: 170px;
  padding: 10px;
  margin: 20px;
  border-radius: 10%;

  h2 {
    margin: 0;
  }
  
`;
