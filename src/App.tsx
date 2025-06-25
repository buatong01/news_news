import Routers from "./routers/index";
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
        <Routers category={category} />
        <FooterView onCategoryChange={setCategory} />
      </NewsProvider>
    </>
  );
}

export default App;
