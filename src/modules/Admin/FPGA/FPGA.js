import { Fragment } from "react";
import Header from "../../../components/header/header";
import { Link } from "react-router-dom";


const FPGA = () => {
  return (
    <Fragment>
      <Header />
      <Link to="/config">Config</Link>
    </Fragment>
  );
};
export default FPGA;
