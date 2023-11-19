import { useState, useRef } from "react";
import { User } from "../context/userContext";

export default function Player({ handleName }) {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value.charAt(0).toUpperCase()+ playerName.current.value.slice(1).toLowerCase());
    handleName(playerName.current.value.charAt(0).toUpperCase()+ playerName.current.value.slice(1).toLowerCase());
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
