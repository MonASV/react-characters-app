import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CharacterDetails() {
  const { characterId } = useParams();
  const [characterDetails, setCharacterDetails] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-crud-api.herokuapp.com/characters/" + characterId)
      .then((response) => {
        setCharacterDetails(response.data);
      })
      .catch((e) => {
        console.log("", e);
      });
  }, []);

  return (
    <section>
      <h1> {characterDetails.name}</h1>
      <p>Occupation: {characterDetails.occupation}</p>
      <p>Occupation: {characterDetails.weapon}</p>
    </section>
  );
}

export default CharacterDetails;
