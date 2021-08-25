import Router from "./routes/Router";
import { useContext, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import GlobalContext from "./global/GlobalContext";

function App() {
  const {
    requests: { getPokemonList },
  } = useContext(GlobalContext);

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
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
