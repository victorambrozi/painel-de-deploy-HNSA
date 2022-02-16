import { GlobalStyle } from "./styles/GlobalStyle.js";
import Login from "./pages/Login/Login";
import PainelDeDeploys from "./pages/PainelDeDeploys/PainelDeDeploys";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GeneralContext from "./context/GeneralContext.jsx";

function App() {
  return (
    <GeneralContext>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/deploys" element={<PainelDeDeploys />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </GeneralContext>
  );
}

export default App;
