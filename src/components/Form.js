import { useState, useEffect } from "react";

function Form(props) {
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
    { num: "09", name: "Semptember" },
    { num: "10", name: "October" },
    { num: "11", name: "November" },
    { num: "12", name: "December" },
  ];

  return (
    <>
      <div className="py-5 flex justify-center items-center flex-col gap-5 md:flex-row">
        <div className="-translate-x-1 md:-translate-x-0">
          <label htmlFor="season">Season:</label>
          <select
            className="ml-10"
            name="season"
            id="season"
            onChange={(e) => props.setYear(e.target.value)}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month:</label>
          <select
            className="ml-10"
            name="month"
            id="month"
            onChange={(e) => props.setMonth(e.target.value)}
          >
            {months.map((e, i) => (
              <option value={e.num} key={i}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="-translate-x-11 md:-translate-x-0">
          <label htmlFor="day">Day:</label>
          <select
            className="ml-12 translate-x-4 md:translate-x-0"
            name="day"
            id="day"
            onChange={(e) => props.setDay(e.target.value)}
          >
            {days.map((e, i) => (
              <option value={e} key={i}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Form;
