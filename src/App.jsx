import "../src/assets/styles/global.css";
import TopFilms from "./components/TopFilms.jsx";
import AllFilms from "./components/AllFilms.jsx";
import NextReleases from "./components/NextReleases.jsx";

function App() {
  return (
    <>
      <TopFilms />
      <NextReleases />
      <AllFilms />
    </>
  );
}

export default App;
