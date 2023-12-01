import { Outlet } from "react-router-dom";
// import  ManagerNav  from "../components/manager/ManagerNav";
import { useContext } from "react";
import Nav from "../components/global/Nav";
import { AuthContext } from "../context/AuthContextProvider";
import { Helmet } from "react-helmet";

function Root() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store </title>
        <meta name="description" content="products List" />
      </Helmet>

      <Nav />

      <Outlet />
    </>
  );
}

export default Root;
