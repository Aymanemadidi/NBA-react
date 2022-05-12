import { useState, useEffect } from "react";
// import detroit from "../../public/Detroit_Pistons_primary_logo_2017.png";
// import timb from "../../public/Timberwolves_du_Minnesota_logo_2017.png";

import "../test.css";

const DetailsSection = () => {
  const [game, setGame] = useState({});
  const [status, setStatus] = useState("idle");
  const [stats, setStats] = useState([
    {
      hTeam: "109",
      label: "Score",
      vTeam: "108",
    },
    {
      hTeam: "50",
      label: "Rebounds",
      vTeam: "58",
    },
    {
      hTeam: "15",
      label: "Biggest Lead",
      vTeam: "4",
    },
  ]);

  const nums = [8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "326bf609afmsh63d4a74dc45a756p1d3745jsnd2e22fb2b78a",
    },
  };

  const path = window.location.pathname.slice(17);

  // let stats = [

  // ];

  useEffect(() => {
    setStatus("Pending");
    fetch(`https://api-nba-v1.p.rapidapi.com/gameDetails/${path}`, options)
      .then((response) => response.json())
      .then((response) => {
        setStatus("Resolved");
        console.log(response.api.game[0]);
        setGame(response.api.game[0]);
      })
      .catch((err) => {
        setStatus("Rejected");
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // setStatus("Pending");
    fetch(
      `https://api-nba-v1.p.rapidapi.com/statistics/games/gameId/${path}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // setStatus("Resolved");
        console.log(response);

        setStats(
          nums.map((e, i) => {
            return {
              label: Object.keys(response.api.statistics[0])[e],
              hTeam:
                response.api.statistics[1][
                  Object.keys(response.api.statistics[0])[e]
                ],
              vTeam:
                response.api.statistics[0][
                  Object.keys(response.api.statistics[1])[e]
                ],
            };
          })
        );
      })
      .catch((err) => {
        // setStatus("Rejected");
        console.error(err);
      });
  }, []);

  if (status === "Pending") {
    return <h3>Loading...</h3>;
  } else if (status === "Rejected") {
    return <h3>Error Fetching</h3>;
  } else if (status === "Resolved") {
    return (
      <>
        <div className="flex justify-around font-semibold mt-3">
          <div className="text-center">
            {/* <p>game.hTeam.seasonYear</p> */}
            <img className="img-logo" src={game.hTeam.logo} alt="" />
            {/* <img className="img-logo" src={detroit} alt="" /> */}
            {/* <h3>{game.hTeam.fullName}</h3> */}
          </div>
          <div className="text-center">
            <img className="img-logo" src={game.vTeam.logo} alt="" />
            {/* <img className="img-logo" src={timb} alt="" /> */}
            {/* <h3>{game.vTeam.fullName}</h3> */}
          </div>
        </div>
        <div className="mt-10">
          {stats.map((obj, i) => (
            <div
              className="flex justify-center text-center m-1 items-center"
              key={obj.label}
            >
              <div
                className={`border-t-2 border-l-2  w-1/3 font-semibold ${
                  i === stats.length - 1 ? "border-b-2" : ""
                }`}
              >
                <p className="text-xl">{obj.hTeam}</p>
              </div>
              <div
                className={`border-t-2 border-l-2  w-1/3 ${
                  i === stats.length - 1 ? "border-b-2" : ""
                }`}
              >
                <p className="text-xl">{obj.label}</p>
              </div>
              <div
                className={`border-t-2 border-l-2  border-r-2 w-1/3 font-semibold ${
                  i === stats.length - 1 ? "border-b-2" : ""
                }`}
              >
                <p className="text-xl">{obj.vTeam}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="border-t-2 border-l-2 border-b-2 w-1/3 font-semibold">
          <p className="text-xl">109</p>
        </div>
        <div className="border-t-2 border-l-2 border-b-2 w-1/3">
          <p className="text-xl">Score</p>
        </div>
        <div className="border-t-2 border-l-2 border-b-2 border-r-2 w-1/3 font-semibold">
          <p className="text-xl">108</p>
        </div> */}
      </>
    );
  }
};

export default DetailsSection;
