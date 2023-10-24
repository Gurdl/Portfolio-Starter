import { Route,Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css"
import Contacts from "./components/Contacts/Contacts";
import Exper from "./components/Experience/Exper";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/works";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme =useContext(themeContext);
  const darkMode=theme.state.darkmode
  return (
    <div className="App"
    style={{
      background:darkMode?"black":'',
      color:darkMode?"white":''
    }}>
      <Navbar></Navbar>
     <Home></Home>
     <Services></Services>
     <Exper></Exper>
     <Works></Works>
     <Portfolio></Portfolio>
     <Testimonial></Testimonial>
     <Contacts></Contacts>
     <Footer></Footer>
    </div>
  );
}

export default App;
