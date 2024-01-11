import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1024px) {
    box-shadow: 2px 0 2px rgba(0, 0, 0, 0.3);
    width: 48rem;
    max-width: 48rem;
  }
`;

function Layout(): JSX.Element {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default Layout;
