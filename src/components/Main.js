import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ContainerForm from "./ContainerForm";
import Results from "./Results";

function Main() {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("05");
  const [day, setDay] = useState("04");
  const [status, setStatus] = useState("idle");

  const funcArr = [setDay, setMonth, setYear, requestGames];

  let date = `${year}-${month}-${day}`;
  const url = `https://api-nba-v1.p.rapidapi.com/games/date/${date}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "326bf609afmsh63d4a74dc45a756p1d3745jsnd2e22fb2b78a",
    },
  };

  function selectOnChange() {
    console.log("getting Run");
  }

  function requestGames() {
    setStatus("pending");
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setStatus("resolved");
        setGames(json.api.games);
      })
      .catch((err) => console.log("error:" + err));
  }

  //useEffect(() => requestGames(), []);

  const [games, setGames] = useState([]);
  return (
    <>
      <Navbar />
      <ContainerForm functions={funcArr} />
      <div className="mt-5 text-center font-semibold">
        <Results games={games} status={status} />
      </div>
    </>
  );
}

export default Main;
