import Routers from "./routers/index";
import NavBarView from "./components/NavBar/view";
import FooterView from "./components/Footer/view";
import "./App.css";
import { useState } from "react";
import { NewsProvider } from "./context/newcontext";
import { SearchProvider } from "./context/SearchContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <ScrollToTop />
      <NewsProvider>
        <SearchProvider>
          <NavBarView
            categorySelected={category}
            onCategoryChange={setCategory}
          />
          <Routers category={category} onCategoryChange={setCategory} />
          <FooterView onCategoryChange={setCategory} />
        </SearchProvider>
      </NewsProvider>
    </>
  );
}

export default App;
