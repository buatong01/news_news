import { Routes, Route } from "react-router-dom";
import HomeView from "./pages/HomePage/view";
import DetailView from "./pages/DetailPage/view";
import NavBarView from "./components/NavBar/view";
import FooterView from "./components/Footer/view";
import "./App.css";
import { useState } from "react";
import { NewsProvider } from "./context/newcontext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <ScrollToTop />
      <NewsProvider>
        <NavBarView onCategoryChange={setCategory} />
        <Routes>
          <Route path="/" element={<HomeView category={category} />} />
          <Route path="/detail/:index" element={<DetailView />} />
        </Routes>
        <FooterView />
      </NewsProvider>
    </>
  );
}

export default App;
