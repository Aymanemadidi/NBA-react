import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Results from "./components/Results";
import DatePicker from "react-datepicker";

function App() {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("05");
  const [day, setDay] = useState("04");

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
    console.log(date);

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.api.games);
        setGames(json.api.games);
      })
      .catch((err) => console.log("error:" + err));
  }

  useEffect(() => requestGames(), [year, month, day]);

  const [games, setGames] = useState([]);
  return (
    <>
      <div className="bg-slate-800">
        <Navbar />
      </div>
      <div className="text-center mt-3">
        <h3>Get the best NBA games</h3>
      </div>
      <div className="text-center border-2 w-3/4 mx-auto mt-3">
        <Form
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
          test={selectOnChange}
        />
      </div>
      <div className="mt-5 text-center">
        <Results games={games} />
      </div>
    </>
  );
}

export default App;