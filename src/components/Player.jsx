import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setIsSubmitted(false)
    setPlayerName(e.target.value);
  };

  const handleClick = () => {
    setIsSubmitted(true);
  };

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
