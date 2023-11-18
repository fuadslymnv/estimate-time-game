import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    axios
      .get("https://express-api-leaderboard.vercel.app/api/leaderboard")
      .then((res) => {
        setLeaderboardData(res.data);
      });
  }, []);
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={40} />
      </div>
      <Leaderboard data={leaderboardData} />
    </>
  );
}

export default App;
