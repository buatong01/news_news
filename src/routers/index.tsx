import { Routes, Route } from "react-router-dom";
import HomeView from "../pages/HomePage/view";
import DetailView from "../pages/DetailPage/view";

function Routers({ category }: { category: string }) {
  return (
    <Routes>
      <Route path="/" element={<HomeView category={category} />} />
      <Route path="/detail/:index/:category" element={<DetailView />} />
    </Routes>
  );
}

export default Routers;
