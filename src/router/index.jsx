import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Quiz from "../components/Quiz";
import Results from "../components/Results";

const RouteConfig = [
  { path: "/", element: <Home /> },
  { path: "/quiz/:nickname", element: <Quiz /> },
  { path: "/results/:nickname", element: <Results /> },

  // 404
  { path: "*", element: <NotFound /> },
];

export default RouteConfig;
