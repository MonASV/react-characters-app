import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-crud-api.herokuapp.com/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((e) => {
        console.log("error getting characters from the API....", e);
      });
  }, []);

  const renderList = () => {
    if (characters === null) {
      return <p>loading...</p>;
    }
    return characters.map((characterObj, index) => {
      return (
        <section key={index} className="card">
          <h3>{characterObj.name}</h3>
          <p>{characterObj.occupation}</p>
          <Link to={"/characters/" + characterObj.id}>More details</Link>
        </section>
      );
    });
  };

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> |<NavLink to="/contact">Contact</NavLink>{" "}
        |<NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={renderList()}></Route>
        <Route path="/contact" element={<p>contact</p>}></Route>
        <Route path="/about" element={<CharacterDetails />}></Route>

        <Route
          path="/characters/:characterId"
          element={<CharacterDetails />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
