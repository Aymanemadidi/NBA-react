import ResultCard from "./ResultCard";

function Results({ games, status }) {
  function test() {
    console.log("test triggered");
  }
  if (status === "idle") {
    return <h3>Please pick a date</h3>;
  } else if (status === "pending") {
    return <h3>Loading...</h3>;
  } else if (games.length === 0) {
    return (
      <div className="text-center">
        <h3>No games found at this date</h3>
      </div>
    );
  }
  return (
    <div className="ml-5  mt-5 text-center">
      <div className="grid grid-cols-1 gap-3 py-5 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game, i) => {
          // console.log(game.hTeam);
          return <ResultCard game={game} index={i} key={game.gameId} />;
        })}
      </div>
    </div>
  );
}

export default Results;
