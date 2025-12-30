import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import WishList from "./WishList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
};

export default App;
