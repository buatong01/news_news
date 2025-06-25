import { Routes, Route } from "react-router-dom";
import HomeView from "./pages/HomePage/view";
import DetailView from "./pages/DetailPage/view";
import NavBarView from "./components/NavBar";
import FooterView from "./components/Footer";
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
        <NavBarView
          categorySelected={category}
          onCategoryChange={setCategory}
        />
        <Routes>
          <Route path="/" element={<HomeView category={category} />} />
          <Route path="/detail/:index/:category" element={<DetailView />} />
        </Routes>
        <FooterView onCategoryChange={setCategory} />
      </NewsProvider>
    </>
  );
}

export default App;
