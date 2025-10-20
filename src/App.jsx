import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import RouteConfig from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RouteConfig.map((config) => (
          <Route key={config.path} {...config} />
        ))}
      </Routes>
      <Toaster position="top-center" reverseOrder={true} />
    </BrowserRouter>
  );
}

export default App;
