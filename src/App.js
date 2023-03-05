import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import { Route, Routes } from 'react-router-dom';
import Car from "./Pages/CarDetails/Car";
import Checkout from "./Pages/Checkout/Checkout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="car" element={<Car />} />
      <Route path="checkout" element={<Checkout/>}/>
    </Routes>
  );
}

export default App;
