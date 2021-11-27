//components
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Student from "./Student";
import Manager from "./Manager";
import Security from "./Security";
import Admin from "./Admin";

const Home = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth._id) return <Redirect to="/login" />;

  return (
    <>
      {auth.userType === "STUDENT" && <Student />}
      {auth.userType === "MANAGER" && <Manager />}
      {auth.userType === "SECURITY" && <Security />}
      {auth.userType === "ADMIN" && <Admin />}
    </>
  );
};

export default Home;
