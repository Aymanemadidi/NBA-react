/* eslint-disable no-unused-vars */
import ResultCard from "./ResultCard";
// import sp from "../../public/processing-circle.mp4";

function Results({ games, status, date, fetch }) {
  let gamesNew = JSON.parse(window.localStorage.getItem("games")) || games;

  if (status === "idle") {
    return <h3>Please pick a date</h3>;
  } else if (status === "pending") {
    return (
      <div className="text-center mt-10">
        {/* <video autoplay loop muted playsinline>
          <source src={sp} type="video/mp4" />
        </video> */}
        Loading...
      </div>
    );
  } else if (gamesNew.length === 0) {
    return (
      <div className="text-center">
        <h3>No games found at this date</h3>
      </div>
    );
  }

  return (
    <>
      {/* <h3>All NBA Games for the {date}</h3> */}
      <div className="grid grid-cols-1 gap-3 py-5 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {gamesNew.map((game, i) => {
          // console.log(game.hTeam);
          return <ResultCard game={game} index={i} key={game.gameId} />;
        })}
      </div>
    </>
  );
}

export default Results;
