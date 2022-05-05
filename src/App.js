import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
