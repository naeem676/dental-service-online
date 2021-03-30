import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from './components/heder/Header';
import OurSirvice from "./components/service/OurSirvice";

function App() {
  return (
    <div>
    <Header></Header>
    <OurSirvice></OurSirvice>
    <Footer></Footer>
      
    </div>
  );
}

export default App;
