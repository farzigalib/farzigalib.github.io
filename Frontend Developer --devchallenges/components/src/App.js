import "./App.css";
import { Routes, Route } from "react-router-dom";
import Button from "./screens/Button";
import Input from "./screens/Input";
import SideBar from "./components/SideBar";
import Colors from "./screens/Colors";
import Typography from "./screens/Typography";
import Spaces from "./screens/Spaces";
import Grid from "./screens/Grid";

function App() {
  return (
    <div className="main-container">
      <SideBar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="/inputs" element={<Input />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="typography" element={<Typography />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="grid" element={<Grid />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
