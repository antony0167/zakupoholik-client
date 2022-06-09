import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Register from "./Register";
import Basket from "./Basket";
import Data from "./Data";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";

function App() {

  const [userLogged, setUserLogged] = useState(null);
  const [sex, setSex] = useState('');
  const [mark, setMark] = useState('');

  const handleSetUser = (user) => {
    setUserLogged(user);
  }

  const handleSex = (sex1) => {
    setSex(sex1);
  }

  const handleMark = (mark1) => {
    setMark(mark1);
  }

  return (
    <Router>
      <div className="App">
        <Menu setUser={handleSetUser} userLogged = {userLogged} setSex = {handleSex} setMark = {handleMark}/>
        <Switch>
          <Route exact path="/">
            <Navbar  setMark = {handleMark}/>
            <Home sex = {sex} mark = {mark}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login setUser={handleSetUser} userLogged = {userLogged}/>
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
        </Switch>
        <Footer userLogged = {userLogged}/>
      </div>
    </Router>
  );
}

export default App;
