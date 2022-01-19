import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import PaymentScreen from './screens/PaymentScreen'
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

function App() {

  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="admin/order/:id" element={<OrderScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route path="/admin/productlist/:pageNumber" element={<ProductListScreen exact />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} exact/>
            <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
            <Route path="/search/:keyword" element={<HomeScreen />} exact />
            <Route path="/page/:pageNumber" element={<HomeScreen />} exact />
            <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} exact />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App;
