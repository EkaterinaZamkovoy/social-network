import React from "react";
import styled from "styled-components";

type NavbarPropsType = {
  menuItems: Array<string>;
};

export const Navbar = ({ menuItems }: NavbarPropsType) => {
  return (
    <StyledNavbar>
      <ul>
        {menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="#">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  grid-area: navbar;
  background-color: #bb89a6;
  border-radius: 20px;
  min-height: 400px;
  max-height: 500px;
  max-width: 200px;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
  }
`;

const ListItem = styled.li`
  transition: transform 600ms ease;
  list-style-type: none;
  text-align: center;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #3a2732;
  color: #3a2732;
  padding: 10px 15px;
  border-radius: 20px;
  transition: color 0.5s, background-color 0.5s;

  &:hover {
    color: #fafafa;
    background-color: #503645;
  }
`;
