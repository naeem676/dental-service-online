import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./components/appointment/Appointment";
import Footer from "./components/footer/Footer";
import Header from './components/heder/Header';
import Login from "./components/login/Login";
import NoMatch from "./components/nomatch/NoMatch";
import OurSirvice from "./components/service/OurSirvice";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header></Header>
          <OurSirvice></OurSirvice>
          <Footer></Footer>
        </Route>
        <Route path='/home'>
          <Header></Header>
          <OurSirvice></OurSirvice>
          <Footer></Footer>
        </Route>
        <Route path='/appointment'>
          <Appointment></Appointment>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='*'>
                  <NoMatch></NoMatch>      
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
