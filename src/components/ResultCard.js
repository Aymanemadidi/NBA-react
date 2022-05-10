import { Link } from "react-router-dom";

function ResultCard({ game, i }) {
  function test() {
    console.log("test triggered");
  }
  return (
    <Link
      to={`/details/${game.hTeam.shortName}-${game.vTeam.shortName}/${game.gameId}`}
    >
      <div className="flex flex-col gap-1 border-2 rounded-md hover:bg-gray-500 cursor-pointer">
        <div className="flex gap-2 p-3 justify-center">
          <div className="hteam">
            <img className="h-12 " src={game.hTeam.logo} />
            <p
              className={`${
                game.hTeam.score.points - game.vTeam.score.points > 0
                  ? "text-green-500"
                  : "text-red-600"
              } font-semibold`}
            >
              {game.hTeam.score.points !== "" ? game.hTeam.score.points : "TBD"}
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
              {game.vTeam.score.points !== "" ? game.vTeam.score.points : "TBD"}
            </p>
          </div>
        </div>
        <div>
          <button className="px-4 py-2 bg-indigo-900 text-white rounded-md">
            {game.hTeam.shortName} VS {game.vTeam.shortName} Game Stats
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ResultCard;
