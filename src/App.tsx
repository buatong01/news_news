import Routers from "./routers/index";
import NavBarView from "./components/NavBar/view";
import FooterView from "./components/Footer/view";
import "./App.css";
import { NewsProvider } from "./context/newcontext";
import { SearchProvider } from "./context/SearchContext";
import useScrollToTop from "./hook/useScrollToTop";

function App() {
  useScrollToTop();

  return (
    <>
      <NewsProvider>
        <SearchProvider>
          <NavBarView />
          <Routers />
          <FooterView />
        </SearchProvider>
      </NewsProvider>
    </>
  );
}

export default App;
