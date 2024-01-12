import styled from "styled-components";

const LoadingDiv = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  // footer의 높이만큼 마진 값
  margin-bottom: 20vh;
  font-size: 1.4rem;
  font-weight: bold;
  color: #1a004d;
`;

function Loading() {
  return <LoadingDiv>목록을 불러오는 중입니다...</LoadingDiv>;
}

export default Loading;
