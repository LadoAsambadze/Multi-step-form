import PersonalInfo from "./Pages/Personal-info";
import { Routes, Route } from "react-router-dom";
import Plan from "./Pages/Plan";
import Addons from "./Pages/Addons";
import Finish from "./Pages/Finish";

import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { updateLocal } from "./store/DataBase";

function App() {
  const base = useSelector((store: any) => store.base);
  const dispatch = useDispatch();

  useEffect(() => {
    const baseItem = localStorage.getItem("base");
    const newBase = baseItem ? JSON.parse(baseItem) : base;
    dispatch(updateLocal(newBase));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </>
  );
}

export default App;
