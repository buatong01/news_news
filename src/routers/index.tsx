import { Routes, Route } from "react-router-dom";
import HomeView from "../pages/HomePage/view";
import DetailView from "../pages/DetailPage/view";
import SearchView from "../pages/SearchPage/view";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/:category" element={<HomeView />} />
      <Route path="/search/" element={<SearchView />} />
      <Route path="/detail/:index/:category" element={<DetailView />} />
    </Routes>
  );
}

export default Routers;
