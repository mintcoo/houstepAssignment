import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  z-index: 100;
  background-color: black;
  position: sticky;
  top: 0;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.5);
  padding: 1rem;
`;

const ImgBox = styled.img`
  margin-left: 2rem;
`;

function NavBar() {
  return (
    <Nav>
      <ImgBox src="/icons/logo-black.png" alt="smallBanJangLogo" />
    </Nav>
  );
}

export default NavBar;
