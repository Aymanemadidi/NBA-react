import { useState } from "react";
import logo from "../../public/testsvg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="py-4">
      <div className=" flex justify-between items-center px-3">
        <div className="logo ml-4">
          <img className="h-10" src={logo} />
        </div>
        <div className="text-center mr-4 md:hidden">
          <div>
            {isOpen ? (
              <FontAwesomeIcon
                onClick={() => setIsopen(!isOpen)}
                icon={faXmark}
                className="text-white test"
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setIsopen(!isOpen)}
                icon={faBars}
                className="text-white test"
              />
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="gap-2 md:flex text-white text-lg mr-4">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
          </ul>
        </div>
      </div>
      <div className={`text-white text-lg ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex justify-end flex-col items-end gap-3 px-4 py-3 text-lg">
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
