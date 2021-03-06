import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import Blogs from "./components/Pages/Blogs/Blogs";
import Checkout from "./components/Pages/Checkout/Checkout";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Services from "./components/Pages/Services/Services";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import SignIn from "./components/Shared/Login/SignIn/SignIn";
import SignUp from "./components/Shared/Login/SignUp/SignUp";

function App() {
  return (
    <div className="Full-Website">
      <div className="Header">
        <Header></Header>
      </div>
      <div className="Body">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
