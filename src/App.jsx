import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import ErrorPage from "./ErrorPage";
import Contacts from "./Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
