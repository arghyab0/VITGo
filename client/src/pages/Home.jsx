//components
import { useSelector } from "react-redux";
import Student from "./Student";
import Manager from "./Manager";
import Security from "./Security";
import Admin from "./Admin";

const Home = () => {
  const auth = useSelector((state) => state.auth);

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
