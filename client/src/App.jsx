//components
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Requests from "./pages/Requests";
import Header from "./components/Header";
import StudentList from "./components/StudentList";

//actions
import { loadUser } from "./redux/actions/authActions";

//toastify styles
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
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
