import ListsOverview from "./components/ListsOverview";
import List from "./components/List";
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
]);

export default router;
