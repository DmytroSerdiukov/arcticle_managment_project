import { RouteObject, createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";
import Auth from "../pages/Auth";
import Register from "../pages/Register";
import { ROUTES } from "../constants/routes";
import PostDetails from "../pages/PostDetails";
import NewPost from "../pages/NewPost";

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <Feed />,
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
    path: ROUTES.NEWPOST,
    element: <NewPost />,
  },
  {
    path: "*",
    element: <div>No such page</div>,
  },
]);

export default router;
