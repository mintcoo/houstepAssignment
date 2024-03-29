import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

//전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  * {
    // 마우스 드래그 금지
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    // 포커스 제거
    outline: none;
  }
  body, html {
    background-color: rgb(23, 23, 24);
    margin: 0;
    padding: 0;
  }
`;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>
);
