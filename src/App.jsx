import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import CharactersPage from "./characters/CharactersPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CharactersPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
