import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/heder/Header';
import OurSirvice from "./components/service/OurSirvice";

function App() {
  return (
    <div>
    <Header></Header>
    <OurSirvice></OurSirvice>
      
    </div>
  );
}

export default App;
