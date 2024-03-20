import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Api from "./components/Api";
import DragonBallForm from "./components/Formulario";


import DataById from "./components/DataById";
import Nav from "./components/nav/Nav";
import IntroHero from "./components/introHero/introHero";
function App() {





  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <IntroHero />
                <Api />

                <Add />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/formulario"
            element={<DragonBallForm />}
          />
          <Route
            path="/data/:id"
            element={
              <>
                <IntroHero />
                <DataById />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
