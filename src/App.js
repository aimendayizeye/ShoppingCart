import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FormPage from "./pages/FormPage";
import MainPage from "./pages/MainPage";
import Cart from "./pages/Cart";
function App() {
  return (
    <ProductContextProvider>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/form" element={<FormPage />} />
            <Route exact path="/cart" element={<Cart/>}/>
          </Routes>
        </Router>
      </div>
    </ProductContextProvider>
  );
}
export default App;
