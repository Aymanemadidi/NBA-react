/* eslint-disable no-unused-vars */
import ResultCard from "./ResultCard";

function Results({ games, status, date, fetch }) {
  let gamesNew = JSON.parse(window.localStorage.getItem("games")) || games;

  if (status === "idle") {
    return <h3>Please pick a date</h3>;
  } else if (status === "pending") {
    return <h3>Loading...</h3>;
  } else if (gamesNew.length === 0) {
    return (
      <div className="text-center">
        <h3>No games found at this date</h3>
      </div>
    );
  }

  return (
    <div className="ml-5  mt-5 text-center">
      {/* <h3>All NBA Games for the {date}</h3> */}
      <div className="grid grid-cols-1 gap-3 py-5 md:grid-cols-2 lg:grid-cols-3">
        {gamesNew.map((game, i) => {
          // console.log(game.hTeam);
          return <ResultCard game={game} index={i} key={game.gameId} />;
        })}
      </div>
    </div>
  );
}

export default Results;
