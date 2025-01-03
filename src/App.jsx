import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
