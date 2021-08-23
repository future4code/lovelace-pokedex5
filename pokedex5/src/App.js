import { createGlobalStyle } from "styled-components"
import Router from "./routes/Router"

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router />
    </div>
  )
}

const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;;
  }
`
export default App