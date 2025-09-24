import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz/:nickname" element={<Quiz />} />
        <Route path="results/:nickname" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
