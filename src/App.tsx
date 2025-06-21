import HomeView from "./pages/HomePage/view";
// import DetailView from "./pages/DetailPage/view";
import NavBarView from "./components/NavBar/view";
import FooterView from "./components/Footer/view";
import "./App.css";

function App() {
  return (
    <>
      <NavBarView />
      <HomeView />
      <FooterView />
    </>
  );
}

export default App;
