import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import More from "./pages/more/More.jsx";

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="more" element={<More />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
