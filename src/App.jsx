import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RouteConfig from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RouteConfig.map((config) => (
          <Route key={config.path} {...config} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
