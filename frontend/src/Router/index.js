import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../Components/DetailPage";
import Add from "../Pages/Add";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/add",
        element: <Add/>,
      },
      {
        path: "/detail/:id",
        element: <DetailPage/>,
      },
  ]);
  export{router}