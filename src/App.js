import {Link,BrowserRouter as Router ,Routes, Route,} from "react-router-dom";
import Contacts from './components/Contacts/Contacts'
import About from './components/About/About'
import {useState} from "react";
import "./App.css"
import Products from './components/Products/Products'
import ProductDetail from "./components/Products/ProductDetail";
import SignUp from './components/SignUp/SignUp'
import SignLog from "./components/SignUp/SignLog";
function App() {
    const [phone, setPhone] = useState("+996500542414")
  return (
    <Router>
        <header>
          <nav>
            <Link to="/">Домой</Link>
            <Link to="/about">О нас</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/signup">Регистрация</Link>
            <Link to="/signlog">Войти</Link>

          </nav>
          <span>
            phone: {phone}</span>
        </header>
      <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts phoneNumber={phone}/>}/>
          <Route path="/" element={<Products/>}/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signlog" element={<SignLog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
