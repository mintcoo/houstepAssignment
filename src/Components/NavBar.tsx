import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  z-index: 100;
  background-color: black;
  position: sticky;
  top: 0;
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
