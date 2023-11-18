// Leaderboard.js

import React from "react";
import WaveLoader from "./WaveLoader";

const Leaderboard = ({ data }) => {
  return data.length !== 0 ? (
    <div className="leaderboard-container">
      <h1>
        The <em>Mighty Leaderboard</em>
      </h1>
      <ul className="leaderboard-list">
        {data.map((item, index) => (
          <li key={index} className="leaderboard-item">
            <span className="position">{index + 1}.</span>
            <span className="name">{item.username}</span>
            <span className="score">{item.score} points</span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <WaveLoader />
  );
};

export default Leaderboard;
