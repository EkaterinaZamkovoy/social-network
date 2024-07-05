import { ReactNode } from "react";
import styled from "styled-components";
import bgImage from "../assets/img/background.png";

type ContainerPropsType = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerPropsType) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  background: rgba(255, 253, 253, 0.718) url(${bgImage}) fixed;
  background-blend-mode: color;
  max-width: 100%;
  margin: 0 10%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 3fr 10fr;
  grid-template-areas:
    "header header"
    "navbar content";
  gap: 30px;
  z-index: -10;
`;
