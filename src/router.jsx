import ListsOverview from "./components/ListsOverview";
import List from "./components/List";
import ListSettings from "./components/ListSettings";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListsOverview />,
  },
  {
    path: "/list/:id",
    element: <List />,
  },
  {
    path: "/list/:id/settings",
    element: <ListSettings />,
  },
]);

export default router;
