import Landing from "./components/pages/landing/Landing";
import { Route, Routes } from "react-router-dom";
import Join from "./components/pages/join/Join";
import Start from "./components/pages/start/Start";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/join" element={<Join />}/>
        <Route path="/start" element={<Start />}/>
      </Routes>
    </>
  );
}

export default App;
