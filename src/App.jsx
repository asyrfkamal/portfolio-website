import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
