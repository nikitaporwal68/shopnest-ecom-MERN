import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer"
import ReturnPolicy from "./pages/ReturnPolicy"
import Login from "./pages/Login"
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import OrderSuccess from "./pages/OrderSuccess";
import AddProduct from './admin/AddProduct'
import AdminDashboard from "./admin/AdminDashboard";
import AdminOrders from "./admin/AdminOrders";
import AdminProducts from "./admin/AdminProducts";
import AdminUsers from "./admin/AdminUsers";
import EditProduct from "./admin/EditProduct";
import VerifyOTP from "./pages/VerifyOTP";


function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/disclaimer" element={<Disclaimer></Disclaimer>}></Route>
            <Route path="/return" element={<ReturnPolicy />} />
            <Route path="/login" element={<Login></Login>} ></Route>
            <Route path="/register" element={<Register></Register>} ></Route>
            <Route path="/products/:id" element={<ProductDetail></ProductDetail>} ></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>} ></Route>
            <Route path="/cart" element={<Cart></Cart>} ></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/ordersuccess" element={<OrderSuccess />} />
            <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          </Routes>
        <Footer></Footer>
    </Router>
    
    </>
  );
}

export default App;
