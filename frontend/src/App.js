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

function App() {

  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
    
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/product/:id' element={<ProductScreen/>}/>
              <Route path='/cart' element={<CartScreen/>} />
              <Route path='/cart/:id' element={<CartScreen/>} />
              <Route path='/' element={<HomeScreen/>} exact/>
            </Routes>
         
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
