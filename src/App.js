import { createContext, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import Deals from "./components/Deals/Deals";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <>
     
     <userContext.Provider value = {[loggedInUser, setLoggedInUser]} >
      <Container>
         <Router>
            <Header/>
              <Switch>
                  <Route exact path = '/' >
                     <Home/>
                  </Route>
                  <PrivateRoute path = '/order' >
                       <Order/>
                  </PrivateRoute>
                  <PrivateRoute path = '/admin' >
                       <Admin/>
                  </PrivateRoute>
                  <Route path = '/deals' >
                       <Deals/>
                  </Route>
                  <Route path = '/login' >
                       <Login/>
                  </Route>
                  <PrivateRoute path = '/checkout/:id' >
                       <CheckOut/>
                  </PrivateRoute>
              </Switch>
         </Router>
      </Container>
      </userContext.Provider>
    </>
  );
}

export default App;
