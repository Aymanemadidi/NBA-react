/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ContainerForm from "./ContainerForm";
import Results from "./Results";

function Main() {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("01");
  const [day, setDay] = useState("01");
  const [status, setStatus] = useState("idle");
  //const [fetchOn, setFetchOn] = useState(false);

  const funcArr = [setDay, setMonth, setYear, setStatus, requestGames];

  const [games, setGames] = useState([]);

  let date = `${year}-${month}-${day}`;
  //console.log(date);
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

  useEffect(() => {
    if (window.localStorage.getItem("games")) {
      setStatus("Resolved");
    }
  });

  // if (window.localStorage.getItem("games")) {
  //   //setGames(JSON.parse(window.localStorage.getItem("games")));
  //   setStatus("Resolved");
  // }

  function requestGames() {
    console.log("func enter");
    //setFetchOn(true);
    if (window.localStorage.getItem("responseGame") !== null) {
      console.log("I enter here");
      window.localStorage.removeItem("responseGame");
    }
    setStatus("pending");
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setStatus("resolved");
        window.localStorage.setItem("games", JSON.stringify(json.api.games));
        //console.log(json.api.games);
        setGames(json.api.games);
      })
      .catch((err) => console.log("error:" + err));
  }

  //useEffect(() => requestGames(), []);
  return (
    <>
      <Navbar />
      <ContainerForm functions={funcArr} />
      <div className="mt-5 text-center font-semibold">
        <Results games={games} status={status} date={date} />
      </div>
    </>
  );
}

export default Main;
