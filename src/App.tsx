import PersonalInfo from "./Pages/Personal-info";
import { Routes, Route } from "react-router-dom";
import Plan from "./Pages/Plan";
import Addons from "./Pages/Addons";
import Finish from "./Pages/Finish";
import store from "./store/redux";
import { Provider } from "react-redux/es/exports";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/addons" element={<Addons />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
