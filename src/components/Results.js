function Results({ games }) {
  return (
    <div className="flex items-center flex-col  gap-3">
      {games.map((game, i) => {
        // console.log(game.hTeam);
        return (
          <div className="flex gap-2" key={i}>
            {/* <h1>boom</h1> */}
            <div className="hteam">
              <img className="h-12 " src={game.hTeam.logo} />
            </div>
            <div className="translate-y-2">VS</div>
            <div className="vteam">
              <img className="h-12 " src={game.vTeam.logo} />
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
