//components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Requests from "./pages/Requests";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/requests">
            <Header />
            <Requests />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
