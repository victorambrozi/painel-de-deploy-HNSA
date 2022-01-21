import { GlobalStyle } from "./styles/GlobalStyle.js";
import Login from "./pages/Login/Login";
import PainelDeDeploys from "./pages/PainelDeDeploys/PainelDeDeploys"

function App() {
  return (
    <>
      <GlobalStyle />
      <PainelDeDeploys />
      {/* <Login /> */}
    </>
  );
}

export default App;
