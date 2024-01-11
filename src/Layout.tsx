import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1024px) {
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
