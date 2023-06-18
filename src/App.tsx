import PersonalInfo from "./Pages/Personal-info";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
      </Routes>
    </>
  );
}

export default App;
