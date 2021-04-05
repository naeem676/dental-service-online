import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./components/appointment/Appointment";
import Check from "./components/checkin/Check";
import Footer from "./components/footer/Footer";
import Header from './components/heder/Header';
import Login from "./components/login/Login";
import NoMatch from "./components/nomatch/NoMatch";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import OurSirvice from "./components/service/OurSirvice";

export const UserContext = createContext();


function App() {

  const [loggInUser, setLoggInUser] = useState({});
  
  
  return (
    <UserContext.Provider value={[loggInUser, setLoggInUser]}>
   
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
        <PrivateRoute path='/check'>
          <Check></Check>
        </PrivateRoute>
        <Route path='*'>
                  <NoMatch></NoMatch>      
        </Route>
      </Switch>
    </Router>

  
      
    </UserContext.Provider>
  );
}

export default App;
