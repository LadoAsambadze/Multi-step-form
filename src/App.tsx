import PersonalInfo from "./Pages/Personal-info";
import { Routes, Route } from "react-router-dom";
import Plan from "./Pages/Plan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </>
  );
}

export default App;
