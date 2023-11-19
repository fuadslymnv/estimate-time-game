import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState("");
  const [playerDetail, setPlayerDetail] = useState({
    username: playerName,
    score: score,
  });

  function handleName(data) {
    setPlayerName(data);
    const userDetail = { ...playerDetail, username: data };
    setPlayerDetail(userDetail);
  }

  function handleScore(data) {
    setScore(data);
    const userDetail = { ...playerDetail, score: data };

    const handlePostReq = async (userData) => {
      try {
        const response = await axios.post(
          "https://express-api-leaderboard.vercel.app/api/leaderboard",
          userData
        );
        console.log(response.data);
      } catch (err) {
        console.error("Error making post request", err.message);
      }
    };

    handlePostReq(userDetail);
    setPlayerDetail(userDetail);
  }

  useEffect(() => {
    axios
      .get("https://express-api-leaderboard.vercel.app/api/leaderboard")
      .then((res) => {
        setLeaderboardData(res.data);
      });
  }, [playerDetail.score]);

  return (
    <>
      <Player handleName={handleName} />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} liftScore={handleScore} />
        <TimerChallenge
          title="Not Easy"
          targetTime={5}
          liftScore={handleScore}
        />
        <TimerChallenge
          title="Getting tough"
          targetTime={10}
          liftScore={handleScore}
        />
        <TimerChallenge
          title="Pros only"
          targetTime={40}
          liftScore={handleScore}
        />
      </div>
      <Leaderboard data={leaderboardData} />
    </>
  );
}

export default App;
