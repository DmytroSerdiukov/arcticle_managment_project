import { RouteObject, createBrowserRouter } from "react-router-dom";
import ProtectedFeed from "../pages/Feed";
import Auth from "../pages/Auth";
import Register from "../pages/Register";
import { ROUTES } from "../constants/routes";
import PostDetails from "../pages/PostDetails";

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <ProtectedFeed />,
  },
  {
    path: ROUTES.AUTH,
    element: <Auth />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.EDIT,
    element: <PostDetails />,
  },
  {
    path: "*",
    element: <div>No such page</div>,
  },
]);

export default router;
