import { useState, useEffect } from "react";

function Form(props) {
  const d = new Date();
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  // console.log(`${y}-${m < 10 ? `0${m}` : m}-${day < 10 ? `0${day}` : day}`);
  const days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const months = [
    { num: "01", name: "January" },
    { num: "02", name: "February" },
    { num: "03", name: "March" },
    { num: "04", name: "April" },
    { num: "05", name: "May" },
    { num: "06", name: "June" },
    { num: "07", name: "July" },
    { num: "08", name: "August" },
    { num: "09", name: "September" },
    { num: "10", name: "October" },
    { num: "11", name: "November" },
    { num: "12", name: "December" },
  ];

  const seasons = [
    { num: "2022", name: "2022" },
    { num: "2021", name: "2021" },
    { num: "2020", name: "2020" },
    { num: "2019", name: "2019" },
    { num: "2018", name: "2018" },
    { num: "2017", name: "2017" },
  ];

  return (
    <>
      <div className="py-5 flex justify-center items-center flex-col gap-5 font-Inter font-medium">
        <div className="">
          <label htmlFor="season">Season:</label>
          <select
            className="ml-10"
            name="season"
            id="season"
            onChange={(e) => props.setYear(e.target.value)}
          >
            {seasons.map((e, i) => {
              return (
                <option
                  value={e.num}
                  key={i}
                  // selected={m === Number(e.num) ? "selected" : null}
                >
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="translate-x-6">
          <label htmlFor="month">Month:</label>
          <select
            className="ml-10"
            name="month"
            id="month"
            onChange={(e) => props.setMonth(e.target.value)}
          >
            {months.map((e, i) => (
              <option
                value={e.num}
                key={i}
                // selected={m === Number(e.num) ? "selected" : null}
              >
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label htmlFor="day">Day:</label>
          <select
            className="ml-12"
            name="day"
            id="day"
            onChange={(e) => props.setDay(e.target.value)}
          >
            {days.map((e, i) => (
              <option
                value={e}
                key={i}
                // selected={day === Number(e) ? "selected" : null}
              >
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className="submit-btn">
          <button
            className="px-4 py-2 rounded-md bg-indigo-900 text-white hover:bg-indigo-700"
            onClick={() => props.request()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
