import { useState, useEffect } from "react";

const Details = () => {
  const [game, setGame] = useState({});

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "326bf609afmsh63d4a74dc45a756p1d3745jsnd2e22fb2b78a",
    },
  };

  const path = window.location.pathname.slice(17);

  // console.log("test");

  function search() {}

  useEffect(() => {
    fetch(`https://api-nba-v1.p.rapidapi.com/gameDetails/${path}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.api.game[0]);
        setGame(response.api.game[0]);
      })
      .catch((err) => console.error(err));
  }, [path]);

  // search();

  return (
    <div className="flex">
      <div className="border-2 w-15">
        <img className="h-12 w-15" src={game.hTeam.logo} alt="" />
      </div>
      <div>
        <img className="h-12" src={game.vTeam.logo} alt="" />
      </div>
    </div>
  );
};

export default Details;
