import "./App.css"
import Home from "./Pages/home/Home";
import Login from "./Pages/register/Login";
import Register from "./Pages/register/Login";
import Watch from "./Pages/watch/Watch";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

const App = () => {
  const user = true;
  return ( 
  <Router>
  <Switch>
    <Route exact path="/">    
      {user ? <Home /> : <Redirect to = "/register" />}
    </Route>
    <Route path="/register">    
      {!user ? <Register /> : <Redirect to = "/" />}
    </Route>
    <Route path="/login">    
      {!user ? <Home /> : <Redirect to = "/" />}
    </Route>
    {user && (
      <>
      <Route path="/movies">
      <Home type="movies"/>
    </Route>
    <Route path="/series">
      <Home type="series"/>
    </Route>
    <Route path="/watch">
      <Watch />
    </Route>
      </>
    )}
    
  </Switch>
  </Router>);
};

export default App;