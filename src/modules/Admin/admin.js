import { Fragment } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Classes from "../../components/mainPage.module.css";
import Header from "../../components/header/header";

const Admin = () => {
  return (
    <Fragment>
      <Header />
      <Outlet></Outlet>
      <div className={Classes.navigatorAjustment}>
        <div className={Classes.adminNavigator}>
          <Link className={Classes.linkNavigator} to="/FPGA">FPGA</Link>
        </div>
        <div className={Classes.adminNavigator}>
          <Link className={Classes.linkNavigator} to="/Reconstruction">Reconstruction</Link>
        </div>
      </div>
    </Fragment>
  );
};
export default Admin;
