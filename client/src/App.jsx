//components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Requests from "./pages/Requests";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Manager from "./pages/Manager";
import Security from "./pages/Security";

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

          <Route exact path="/man">
            <Header />
            <Manager />
          </Route>

          <Route exact path="/sec">
            <Header />
            <Security />
          </Route>

          <Route path="/admin">
            <Header />
            <Admin />
          </Route>

          <Route path="/requests">
            <Header />
            <Requests />
          </Route>

          <Route path="/students">
            <Header />
            <StudentList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;