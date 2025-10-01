import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Results from "../components/Results";

const RouteConfig = [
  { path: "/", element: <Home /> },
  { path: "/quiz/:nickname", element: <Quiz /> },
  { path: "/results/:nickname", element: <Results /> },
];

export default RouteConfig;
