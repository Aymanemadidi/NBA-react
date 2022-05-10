import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:game/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
