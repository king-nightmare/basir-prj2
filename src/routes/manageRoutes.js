import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "../components/mainPage";
import { Fragment } from "react";
import Admin from "../modules/Admin/admin";
import Scan from "../modules/Scan/scan";
import FPGA from "../modules/Admin/FPGA/FPGA";
import MultiSelectAndInputComponent from "../modules/Admin/FPGA/config/Config";
import Reconstruction from "../modules/Admin/Reconstruction/Reconstruction";

const ManageRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    { path: "/Scan", element: <Scan /> },
    { path: "/FPGA", element: <FPGA /> },
    {path:"/config", element:<MultiSelectAndInputComponent />},
    
    { path: "/Reconstruction", element: <Reconstruction /> },
  ]);

  return (
    <Fragment>
      <Outlet />
      <RouterProvider router={routes}></RouterProvider>
    </Fragment>
  );
};
export default ManageRoutes;
