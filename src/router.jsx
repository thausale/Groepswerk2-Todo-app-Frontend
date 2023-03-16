import ListsOverview from "./components/ListsOverview";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListsOverview />,
  },
]);

export default router;
