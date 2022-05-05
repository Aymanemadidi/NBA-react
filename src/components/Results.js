function Results({ games, status }) {
  if (status === "idle") {
    return <h3>Please pick a date</h3>;
  } else if (status === "pending") {
    return <h3>Loading...</h3>;
  } else if (games.length === 0) {
    return (
      <div>
        <h3>No games found at this date</h3>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-3 py-5 md:grid-cols-2 lg:grid-cols-3">
      {games.map((game, i) => {
        // console.log(game.hTeam);
        return (
          <div className="flex flex-col gap-1 border-2 rounded-md hover:bg-gray-500 cursor-pointer">
            <div className="flex gap-2 p-3 justify-center" key={i}>
              {/* <h1>boom</h1> */}
              <div className="hteam">
                <img className="h-12 " src={game.hTeam.logo} />
                <p
                  className={`${
                    game.hTeam.score.points - game.vTeam.score.points > 0
                      ? "text-green-500"
                      : "text-red-600"
                  } font-semibold`}
                >
                  {game.hTeam.score.points}
                </p>
              </div>
              <div className="translate-y-2">VS</div>
              <div className="vteam">
                <img className="h-12 " src={game.vTeam.logo} />
                <p
                  className={`${
                    game.vTeam.score.points - game.hTeam.score.points > 0
                      ? "text-green-500"
                      : "text-red-600"
                  } font-semibold`}
                >
                  {game.vTeam.score.points}
                </p>
              </div>
            </div>
            <div>
              <button className="px-4 py-2 bg-indigo-900 text-white rounded-md">
                {game.hTeam.shortName} VS {game.vTeam.shortName} Game Stats
              </button>
            </div>
          </div>
        );
      })}
      {/* <div className="hteam">
        <img className="h-12 " src={games[0].hTeam.logo} />
      </div>
      <div className="translate-y-2">VS</div>
      <div className="vteam">
        <img className="h-12 " src={games[0].vTeam.logo} />
      </div> */}
    </div>
  );
}

export default Results;
