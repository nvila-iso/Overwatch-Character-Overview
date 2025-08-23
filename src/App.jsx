import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Display from "./layout/Display";
import FilterDisplay from "./layout/FilterDisplay";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Display />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
