import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Container from "./components/Container";
import { useDispatch } from "react-redux";
import { setProductsData } from "./store/productsDataSlice";
import { useEffect } from "react";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import LogInPage from "./pages/LogInPage";
import ScrollToTop from "./components/ScrollToTop";
import data from './mystore-api.json'

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getData());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(setProductsData(data));
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product/:productid" element={<ProductPage />} />
          <Route path="/search/:searchquery" element={<SearchPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/sign-in" element={<LogInPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
