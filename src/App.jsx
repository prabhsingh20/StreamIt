import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import SinglePage from "./components/watch/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singlePage/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
