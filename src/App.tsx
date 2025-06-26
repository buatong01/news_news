import Routers from "./routers/index";
import NavBarView from "./components/NavBar/view";
import FooterView from "./components/Footer/view";
import "./App.css";
import { useState } from "react";
import { NewsProvider } from "./context/newcontext";
import { SearchProvider } from "./context/SearchContext";
import useScrollToTop from "./hook/useScrollToTop";

function App() {
  const [category, setCategory] = useState("");
  useScrollToTop();

  return (
    <>
      <NewsProvider>
        <SearchProvider>
          <NavBarView
            categorySelected={category}
            onCategoryChange={setCategory}
          />
          <Routers category={category} />
          <FooterView onCategoryChange={setCategory} />
        </SearchProvider>
      </NewsProvider>
    </>
  );
}

export default App;
