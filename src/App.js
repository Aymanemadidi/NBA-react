/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details/:game/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
