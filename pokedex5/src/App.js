import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ToastContainer position="bottom-right" />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;;
  }
`;
export default App;
