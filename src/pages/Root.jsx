import { Outlet } from "react-router-dom";
// import  ManagerNav  from "../components/manager/ManagerNav";
import { useContext } from "react";
import Nav from "../components/Nav";
import { AuthContext } from "../context/AuthContextProvider";

function Root() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      {user && <Nav />}
     

      <Outlet />
    </>
  );
}

export default Root;
