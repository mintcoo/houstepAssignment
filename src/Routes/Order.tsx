import styled from "styled-components";

const OrderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  @media screen and (min-width: 1024px) {
    width: 48rem;
    max-width: 48rem;
  }
`;

const NavBar = styled.div`
  background-color: black;
  position: sticky;
  top: 0;
  padding: 1rem;
  z-index: 100;
`;

const FootBar = styled.div`
  background-color: black;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 100;
`;

const ImgBox = styled.img`
  margin-left: 2rem;
`;

function Order() {
  return (
    <OrderContainer>
      <NavBar>
        <ImgBox src="/icons/logo-black.png" alt="smallBanJangLogo" />
      </NavBar>
      <FootBar>aasd</FootBar>
    </OrderContainer>
  );
}

export default Order;
