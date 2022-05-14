/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import "../test.css";

const DetailsSection = () => {
  const [game, setGame] = useState({});
  const [status, setStatus] = useState("idle");
  const [paath, setPath] = useState(window.location.pathname.slice(17));
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

  // const path = window.location.pathname.slice(17);

  useEffect(() => {
    setStatus("Pending");

    if (window.localStorage.getItem("responseGame")) {
      setGame(
        JSON.parse(window.localStorage.getItem("responseGame")).api.game[0]
      );
      setStatus("Resolved");
      return function () {
        window.localStorage.removeItem("responseGame");
      };
    }
    fetch(`https://api-nba-v1.p.rapidapi.com/gameDetails/${paath}`, options)
      .then((response) => response.json())
      .then((response) => {
        setStatus("Resolved");
        // if (window.localStorage.getItem("responseGame")) {
        //   window.localStorage.removeItem("responseGame");
        // }
        window.localStorage.setItem("responseGame", JSON.stringify(response));
        setGame(response.api.game[0]);
      })
      .catch((err) => {
        setStatus("Rejected");
        console.error(err);
      });
    return function () {
      // window.localStorage.clear();
      // console.log(JSON.parse(window.localStorage.getItem("responseGame")));
    };
  }, [paath]);

  useEffect(() => {
    if (window.localStorage.getItem("responseStats")) {
      setStats(
        nums.map((e, i) => {
          return {
            label: Object.keys(
              JSON.parse(window.localStorage.getItem("responseStats")).api
                .statistics[0]
            )[e],
            hTeam: JSON.parse(window.localStorage.getItem("responseStats")).api
              .statistics[1][
              Object.keys(
                JSON.parse(window.localStorage.getItem("responseStats")).api
                  .statistics[0]
              )[e]
            ],
            vTeam: JSON.parse(window.localStorage.getItem("responseStats")).api
              .statistics[0][
              Object.keys(
                JSON.parse(window.localStorage.getItem("responseStats")).api
                  .statistics[1]
              )[e]
            ],
          };
        })
      );
      setStatus("Resolved");
      return function () {
        window.localStorage.removeItem("responseStats");
      };
    }
    fetch(
      `https://api-nba-v1.p.rapidapi.com/statistics/games/gameId/${paath}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        window.localStorage.setItem("responseStats", JSON.stringify(response));

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
        console.error(err);
      });

    return function () {
      //window.localStorage.clear();
    };
  }, [paath]);

  if (status === "Pending") {
    return <h3>Loading...</h3>;
  } else if (status === "Rejected") {
    return <h3>Error Fetching</h3>;
  } else if (status === "Resolved") {
    return (
      <>
        <div className="flex justify-around font-semibold mt-3">
          <div className="text-center">
            <img className="img-logo" src={game.hTeam.logo} alt="" />
          </div>
          <div className="text-center">
            <img className="img-logo" src={game.vTeam.logo} alt="" />
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
      </>
    );
  }
  //window.localStorage.clear();
};

export default DetailsSection;
